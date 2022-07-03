import { TYPE_TASK } from "../../constants/type";

export const getAllTask = () => {
  return {
    type: TYPE_TASK.GET_ALL_TASK,
  };
};

export const addNewtask = (payload) => ({
  type: TYPE_TASK.ADD_NEW_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: TYPE_TASK.DELETE_TASK,
  payload,
});
export const updatetask = (payload) => ({
  type: TYPE_TASK.UPDATE_TASK,
  payload,
});
export const getTaskById = (payload) => ({
  type: TYPE_TASK.GET_TASK_BY_ID,
  payload,
});
