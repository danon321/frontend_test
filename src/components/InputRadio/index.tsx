import { ReactNode, useState } from "react";
import "./InputRadio.scss";
import { Option } from "../../types/option";

interface Props {
  children: ReactNode;
  checked?: boolean;
  onClick: () => void;
  labelText: string;
}

const InputRadio = ({
  children,
  checked = false,
  onClick,
  labelText,
}: Props) => {
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
        role="radio"
        defaultChecked={checked}
        onClick={handleClick}
        aria-label={labelText}
        aria-checked={check}
      />
      <p className="radio__text">{children}</p>
    </label>
  );
};

export default InputRadio;
