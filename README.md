https://dlgowns3695.github.io/AQuietPlace/


// 마우스 추가

  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = mouseX * Math.PI * 0.5;
      // modelRef.current.rotation.z += 0.005; // y축 기준으로 회전
    }
  });

크기조절

 >>  3D 시계 3D라는거 알 수 있는 방법

 가로스크롤 센터
