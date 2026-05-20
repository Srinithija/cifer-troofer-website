import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ target, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCount(Math.floor(target * progress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
