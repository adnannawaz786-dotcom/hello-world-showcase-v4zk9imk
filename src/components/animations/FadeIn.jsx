import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const FadeIn = ({
  children,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 30,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, triggerOnce, hasTriggered]);

  const getTransformStyle = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: getTransformStyle(),
    transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    willChange: 'transform, opacity',
  };

  return (
    <div
      ref={elementRef}
      className={`fade-in-wrapper ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  distance: PropTypes.number,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
  className: PropTypes.string,
};

// Preset variations for common use cases
export const FadeInUp = ({ children, ...props }) => (
  <FadeIn direction="up" {...props}>
    {children}
  </FadeIn>
);

export const FadeInDown = ({ children, ...props }) => (
  <FadeIn direction="down" {...props}>
    {children}
  </FadeIn>
);

export const FadeInLeft = ({ children, ...props }) => (
  <FadeIn direction="left" {...props}>
    {children}
  </FadeIn>
);

export const FadeInRight = ({ children, ...props }) => (
  <FadeIn direction="right" {...props}>
    {children}
  </FadeIn>
);

// Staggered animation component for multiple children
export const FadeInStagger = ({
  children,
  staggerDelay = 100,
  direction = 'up',
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <>
      {childrenArray.map((child, index) => (
        <FadeIn
          key={index}
          delay={index * staggerDelay}
          direction={direction}
          {...props}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
};

FadeInStagger.propTypes = {
  children: PropTypes.node.isRequired,
  staggerDelay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
};

// Quick fade component with minimal distance
export const QuickFade = ({ children, ...props }) => (
  <FadeIn
    duration={300}
    distance={15}
    {...props}
  >
    {children}
  </FadeIn>
);

QuickFade.propTypes = {
  children: PropTypes.node.isRequired,
};

// Slow fade component with more dramatic effect
export const SlowFade = ({ children, ...props }) => (
  <FadeIn
    duration={1000}
    distance={50}
    {...props}
  >
    {children}
  </FadeIn>
);

SlowFade.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook for programmatic animation control
export const useFadeIn = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const trigger = () => setIsVisible(true);
  const reset = () => setIsVisible(false);

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translate3d(0, 0, 0)' 
      : `translate3d(0, ${options.distance || 30}px, 0)`,
    transition: `all ${options.duration || 600}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    willChange: 'transform, opacity',
  };

  return {
    ref: elementRef,
    style,
    isVisible,
    trigger,
    reset,
  };
};

export default FadeIn;