import Input from "./Input";
import React from "react";
import { INPUT_NAME } from "../constants/type";

const Form = ({ propsForm, onSubmit }) => {
  const { handleSubmit, control, formState } = propsForm;
  const { errors } = formState;

  return (
    <form
      autoComplete="off"
      className="form-control"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        control={control}
        name={INPUT_NAME.NAME}
        placeholder="name"
        error={errors?.name?.message}
      ></Input>

      <button className="btn-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
