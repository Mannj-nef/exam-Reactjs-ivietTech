import React from "react";
import { useController } from "react-hook-form";

const Input = ({ lable, control, error, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });
  return (
    <div className="input-wrapp">
      {lable && (
        <label className="lable" htmlFor={props.id || props.name}>
          {lable}
        </label>
      )}
      <input className="input-control" type="text" {...field} {...props} />
      {error && <p className="erros-message">{error}</p>}
    </div>
  );
};

export default Input;
