import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
} & HTMLMotionProps<"div">;

export default function FadeIn({
  children,
  delay = 0.3,
  duration = 0.5,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      className={`FadeIn ${className ?? ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}