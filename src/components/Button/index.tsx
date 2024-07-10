import { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  secoundary?: boolean;
  className?: string;
}

const Button = ({
  secoundary = false,
  children,
  className,
  ...props
}: Props) => {
  const style = className ? className : "";
  return (
    <button
      {...props}
      className={`button ${secoundary && "button--secoundary"} ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
