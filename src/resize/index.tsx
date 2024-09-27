useEffect(() => {
    const handleResize = () => {
      setProgress(0);
      loadCanvasModels(setProgress); // 페이지 리사이즈 시 로딩
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // 클린업
    };
  }, [setProgress]);