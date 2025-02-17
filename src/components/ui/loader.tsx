// components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Loader;