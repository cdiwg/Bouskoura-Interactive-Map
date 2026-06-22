import React from 'react';
import bskLogo from '../assets/logos/logo-bsk.png';

interface LogoProps {
  size?: number;
  color?: string; // Kept for compatibility but not used for the image
}

const Logo: React.FC<LogoProps> = ({ size = 32 }) => {
  return (
    <img 
      src={bskLogo} 
      alt="Bouskoura Logo" 
      style={{ 
        width: size, 
        height: size,
        objectFit: 'contain',
        display: 'block'
      }} 
    />
  );
};

export default Logo;
