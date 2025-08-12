import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'blue', 
  thickness = '2', 
  className = '',
  showText = false,
  text = 'Loading...',
  variant = 'spin'
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  };

  const colorClasses = {
    blue: 'text-blue-600',
    indigo: 'text-indigo-600',
    purple: 'text-purple-600',
    pink: 'text-pink-600',
    red: 'text-red-600',
    orange: 'text-orange-600',
    yellow: 'text-yellow-600',
    green: 'text-green-600',
    teal: 'text-teal-600',
    cyan: 'text-cyan-600',
    gray: 'text-gray-600',
    white: 'text-white'
  };

  const SpinVariant = () => (
    <svg
      className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={thickness}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const PulseVariant = () => (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className={`w-full h-full ${colorClasses[color]} bg-current rounded-full animate-pulse opacity-75`} />
    </div>
  );

  const DotsVariant = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 ${colorClasses[color]} bg-current rounded-full animate-bounce`}
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.6s'
          }}
        />
      ))}
    </div>
  );

  const BarsVariant = () => (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-1 h-6 ${colorClasses[color]} bg-current rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '1.2s'
          }}
        />
      ))}
    </div>
  );

  const RippleVariant = () => (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className={`absolute inset-0 border-2 border-current ${colorClasses[color]} rounded-full animate-ping`} />
      <div 
        className={`absolute inset-0 border-2 border-current ${colorClasses[color]} rounded-full animate-ping`}
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );

  const CircleVariant = () => (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className={`w-full h-full border-2 border-gray-200 rounded-full`} />
      <div 
        className={`absolute inset-0 w-full h-full border-2 border-transparent border-t-current ${colorClasses[color]} rounded-full animate-spin`}
      />
    </div>
  );

  const renderSpinner = () => {
    switch (variant) {
      case 'pulse':
        return <PulseVariant />;
      case 'dots':
        return <DotsVariant />;
      case 'bars':
        return <BarsVariant />;
      case 'ripple':
        return <RippleVariant />;
      case 'circle':
        return <CircleVariant />;
      case 'spin':
      default:
        return <SpinVariant />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderSpinner()}
      {showText && (
        <p className={`text-sm font-medium ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  color: PropTypes.oneOf([
    'blue', 'indigo', 'purple', 'pink', 'red', 'orange', 
    'yellow', 'green', 'teal', 'cyan', 'gray', 'white'
  ]),
  thickness: PropTypes.string,
  className: PropTypes.string,
  showText: PropTypes.bool,
  text: PropTypes.string,
  variant: PropTypes.oneOf(['spin', 'pulse', 'dots', 'bars', 'ripple', 'circle'])
};

export default LoadingSpinner;