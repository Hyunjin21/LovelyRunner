import React, { useEffect, useMemo, useRef, useState } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";

export default function Model({ position }) {
  const { nodes } = useGLTF("/models/Material_X.glb");
  const { viewport } = useThree();
  const modelRef = useRef(null);

  // 스크롤 추가
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      // 스크롤 위치에 따라 y축 회전 조절
      modelRef.current.rotation.y = scrollY * 0.002; // 회전 속도 조절
    }
  });

  const rainbowMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        baseColor: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 baseColor;
        varying vec2 vUv;
        
        vec3 hsv2rgb(vec3 c) {
          vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
          vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
          return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
        }
  
        void main() {
          float hue = fract((vUv.x + vUv.y) * 0.5 + time * 0.05);
          vec3 rainbowColor = hsv2rgb(vec3(hue, 0.9, 0.9));
          vec3 blueColor = vec3(0.53, 0.8, 0.92);
          vec3 finalColor = mix(baseColor, rainbowColor, 0.8);
          finalColor = mix(finalColor, blueColor, 0.5);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      transparent: true,
    });
  }, []);

  useFrame((state) => {
    if (rainbowMaterial.uniforms) {
      rainbowMaterial.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  const transmissionProps = {
    thickness: 0.2,
    roughness: 0.2,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
    // envMapIntensity: 1.5, // 환경 맵 강도 추가
  };


  const scale = Math.min(viewport.width, viewport.height) / 4;

  return (
    <group scale={scale} position={position}>
      <group
        ref={modelRef}
        scale={10}
        position={[0, 0, 0]}
        rotation={[-0.5, -0.5, -0.5]}
      >
        <group rotation={[0, 0, 0]}>
          {Object.keys(nodes).map((nodeName) => (
            <mesh key={nodeName} geometry={nodes[nodeName].geometry}>
              <shaderMaterial args={[rainbowMaterial]} />
              <MeshTransmissionMaterial {...transmissionProps} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Material_X.glb");
