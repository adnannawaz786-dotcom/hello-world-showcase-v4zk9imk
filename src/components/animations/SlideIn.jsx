import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SlideIn = ({
  children,
  direction = 'left',
  duration = 600,
  delay = 0,
  distance = 50,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!triggerOnce || !hasTriggered) {
            setTimeout(() => {
              setIsVisible(true);
              setHasTriggered(true);
            }, delay);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
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
  }, [threshold, delay, triggerOnce, hasTriggered]);

  const getTransformValues = () => {
    if (isVisible) {
      return {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
      };
    }

    const transforms = {
      left: `translate3d(-${distance}px, 0, 0)`,
      right: `translate3d(${distance}px, 0, 0)`,
      up: `translate3d(0, -${distance}px, 0)`,
      down: `translate3d(0, ${distance}px, 0)`,
      'top-left': `translate3d(-${distance}px, -${distance}px, 0)`,
      'top-right': `translate3d(${distance}px, -${distance}px, 0)`,
      'bottom-left': `translate3d(-${distance}px, ${distance}px, 0)`,
      'bottom-right': `translate3d(${distance}px, ${distance}px, 0)`
    };

    return {
      transform: transforms[direction] || transforms.left,
      opacity: 0
    };
  };

  const animationStyle = {
    transition: `all ${duration}ms ${easing}`,
    willChange: 'transform, opacity',
    ...getTransformValues()
  };

  return (
    <div
      ref={elementRef}
      className={`slide-in-wrapper ${className}`}
      style={animationStyle}
      {...props}
    >
      {children}
    </div>
  );
};

SlideIn.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf([
    'left',
    'right',
    'up',
    'down',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ]),
  duration: PropTypes.number,
  delay: PropTypes.number,
  distance: PropTypes.number,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
  className: PropTypes.string,
  easing: PropTypes.string
};

// Preset configurations for common use cases
export const SlideInLeft = (props) => (
  <SlideIn direction="left" {...props} />
);

export const SlideInRight = (props) => (
  <SlideIn direction="right" {...props} />
);

export const SlideInUp = (props) => (
  <SlideIn direction="up" {...props} />
);

export const SlideInDown = (props) => (
  <SlideIn direction="down" {...props} />
);

// Staggered animation wrapper for multiple children
export const StaggeredSlideIn = ({
  children,
  staggerDelay = 100,
  direction = 'left',
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((child, index) => (
        <SlideIn
          key={index}
          direction={direction}
          delay={index * staggerDelay}
          {...props}
        >
          {child}
        </SlideIn>
      ))}
    </>
  );
};

StaggeredSlideIn.propTypes = {
  children: PropTypes.node.isRequired,
  staggerDelay: PropTypes.number,
  direction: PropTypes.oneOf([
    'left',
    'right',
    'up',
    'down',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ])
};

// Sequential slide-in for card layouts
export const SequentialSlideIn = ({
  children,
  sequenceDelay = 200,
  direction = 'up',
  startDelay = 0,
  ...props
}) => {
  return (
    <div className="sequential-slide-in">
      {React.Children.map(children, (child, index) => (
        <SlideIn
          key={index}
          direction={direction}
          delay={startDelay + (index * sequenceDelay)}
          {...props}
        >
          {child}
        </SlideIn>
      ))}
    </div>
  );
};

SequentialSlideIn.propTypes = {
  children: PropTypes.node.isRequired,
  sequenceDelay: PropTypes.number,
  direction: PropTypes.oneOf([
    'left',
    'right',
    'up',
    'down',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ]),
  startDelay: PropTypes.number
};

export default SlideIn;