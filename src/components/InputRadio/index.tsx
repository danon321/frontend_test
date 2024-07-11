import { ReactNode, useState } from "react";
import "./InputRadio.scss";

interface Props {
  children: ReactNode;
  checked?: boolean;
}

const InputRadio = ({ children, checked = false }: Props) => {
  const [check, setCheck] = useState(checked);
  return (
    <label className="radio">
      <input
        className={`radio__input`}
        type="radio"
        name="radio"
        defaultChecked={checked}
        onClick={() => setCheck(!check)}
      />
      <p className="radio__text">{children}</p>
    </label>
  );
};

export default InputRadio;
