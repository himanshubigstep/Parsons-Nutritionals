import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  // Ensure className is a valid CSS class name
  const classNames = className.trim().split(/\s+/).join(' ');

  return (
    <div className={`btn ${classNames}`} onClick={onClick} role="button" tabIndex={0}>
      {children}
    </div>
  );
};

export default Button;
