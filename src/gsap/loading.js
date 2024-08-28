import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10); // 50ms마다 1%씩 증가

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <p style={styles.percentage}>{progress}%</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'skyblue',
  },
  percentage: {
    marginTop: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default Loading;

