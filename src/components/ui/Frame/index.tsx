import { ReactNode } from "react";
import "./Frame.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

const Frame = ({ children, className }: Props) => {
  const style = className ? className : "";
  return <div className={`frame ${style}`}>{children}</div>;
};

export default Frame;
