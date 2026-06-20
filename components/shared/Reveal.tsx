'use client';

import * as React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  id?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  yOffset = 24,
  className,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealWithStaggerProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  className?: string;
  id?: string;
}

export function RevealWithStagger({
  children,
  staggerDelay = 0.15,
  className,
  id,
}: RevealWithStaggerProps) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.215, 0.61, 0.355, 1],
                },
              },
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
