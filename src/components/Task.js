import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Form from "./Form";
import { INPUT_NAME } from "../constants/type";

const schema = Yup.object({
  [INPUT_NAME.NAME]: Yup.string().required(),
});

const Task = () => {
  const propsForm = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="task-wrapp">
      <Form propsForm={propsForm} onSubmit={onSubmit}></Form>
    </div>
  );
};

export default Task;
