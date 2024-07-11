import { ReactNode, useState } from "react";
import "./InputRadio.scss";
import { Option } from "../../types/option";

interface Props {
  children: ReactNode;
  checked?: boolean;
  onClick: () => void;
}

const InputRadio = ({ children, checked = false, onClick }: Props) => {
  const [check, setCheck] = useState(checked);
  function handleClick() {
    setCheck(!check);
    onClick();
  }

  return (
    <label className="radio">
      <input
        className={`radio__input`}
        type="radio"
        name="radio"
        defaultChecked={checked}
        onClick={handleClick}
      />
      <p className="radio__text">{children}</p>
    </label>
  );
};

export default InputRadio;
