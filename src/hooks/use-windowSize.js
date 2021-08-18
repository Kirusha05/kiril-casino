import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const getWindowSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', getWindowSize);

    return () => window.removeEventListener('resize', getWindowSize);
  }, []);

  return size;
};

export default useWindowSize;
