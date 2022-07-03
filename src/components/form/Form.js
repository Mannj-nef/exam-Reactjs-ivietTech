import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { actionTask } from "../../redux/actionsTask";

const schema = Yup.object({
  task: Yup.string().required(),
});

const Form = ({ taskItem = {} }) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const { register, handleSubmit, formState, reset, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const onSubmit = (values) => {
    if (isUpdate) {
      const payload = {
        ...values,
        id: taskItem.id,
      };
      dispatch(actionTask.updatetask(payload));
      setIsUpdate(false);
    } else {
      dispatch(actionTask.addNewtask(values));
    }
    reset();
  };

  useEffect(() => {
    if (Object.keys(taskItem).length > 0) {
      setIsUpdate(true);
    }
    setValue("task", taskItem?.task);
  }, [taskItem, setValue]);

  return (
    <form
      className="  max-w-[500px] m-auto"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-3">
        <input
          className="w-f p-2 rounded-md border flex-1 border-[blue]"
          type="text"
          {...register("task")}
        />
        <button className="p-2 text-white bg-blue-600 rounded-md" type="submit">
          Submit
        </button>
      </div>
      {errors?.task?.message && (
        <div className="text-red-600">{errors?.task?.message}</div>
      )}
    </form>
  );
};

export default Form;
