import React from "react";

interface TextFieldProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  pattern?: string;
  label?: string;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}

function TextField({
  onChange,
  value,
  pattern,
  label,
  onInput,
  onKeyPress,
}: TextFieldProps) {
  return (
    <div>
      {label}
      <div style={{ margin: "5px 20px 20px 20px" }}>
        <input
          type="text"
          id="text"
          name="message"
          onChange={onChange}
          value={value}
          pattern={pattern}
          onInput={onInput}
          onKeyPress={onKeyPress}
          width="108px"
          height="45px"
        />
      </div>
    </div>
  );
}

export default TextField;
