import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Button = ({
  children,
  className,
  style,
}: ButtonProps): ReactNode => {
  return (
    <button style={style} className={className}>
      {children}
    </button>
  );
};
