import React from 'react';

interface CurveProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Curve: React.FC<CurveProps> = ({ backgroundColor = "#f7f2e6", children }) => {
  return (
    <div style={{ backgroundColor }}>
      {children}
    </div>
  );
}; 