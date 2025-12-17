"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "group relative inline-flex select-none items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-60 disabled:pointer-events-none min-h-12",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-gradient-to-r from-blue-600 to-purple-600",
        secondary:
          "text-white/90 border border-white/15 bg-white/5 backdrop-blur-sm",
        ghost:
          "text-white/80",
      },
      size: {
        sm: "px-4 py-2 text-sm min-h-10",
        md: "px-6 py-3 text-base min-h-12",
        lg: "px-8 py-4 text-lg min-h-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type MotionButtonProps = Omit<React.ComponentProps<typeof motion.button>, "ref">;

export interface ButtonProps
  extends MotionButtonProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, href, ...props }, ref) => {
    const content = (
      <>
        {/* Beam sweep effect */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 w-0 -skew-x-12 bg-white/15 transition-all duration-300 group-hover:w-full" />
        </span>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          ref={ref as any}
          className={clsx(buttonVariants({ variant, size }), className)}
          initial={false}
          whileHover={{ y: -1, scale: 1.015 }}
          whileTap={{ y: 0, scale: 0.99 }}
          {...(props as any)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={clsx(buttonVariants({ variant, size }), className)}
        initial={false}
        whileHover={{ y: -1, scale: 1.015 }}
        whileTap={{ y: 0, scale: 0.99 }}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export default Button;
