https://dlgowns3695.github.io/AQuietPlace/

1. 메인화면
2. 3D 시계 3D인것처럼
3. 새로고침시 다시 처음부터 >>> 보류
4. 모바일화면 수정 >>> 해결
5. 이미지들 뒤에 글씨 > 드라마 웹툰 >>> 해결
// 마우스 추가 >>> 해결

const [mouseX, setMouseX] = useState(0);

useEffect(() => { const handleMouseMove = (event) => { setMouseX(event.clientX / window.innerWidth - 0.5); }; window.addEventListener("mousemove", handleMouseMove); return () => { window.removeEventListener("mousemove", handleMouseMove); }; }, []);

useFrame(() => { if (modelRef.current) { modelRef.current.rotation.y = mouseX * Math.PI * 0.5; // modelRef.current.rotation.z += 0.005; // y축 기준으로 회전 } });

크기조절

3D 시계 3D라는거 알 수 있는 방법

가로스크롤 센터

우산은 스크롤에따라 X축 기준 회전



https://ilyashubin.github.io/scrollbooster/
https://interactjs.io/


https://velog.io/@bami/React-GitHub-Pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0