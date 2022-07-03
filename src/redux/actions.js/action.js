import { TYPE_TASK } from "../../constants/type";

export const AddTask = (payload) => ({
  type: TYPE_TASK.ADD_TASK,
  payload,
});
export const updateTask = (payload) => ({
  type: TYPE_TASK.UPDATE_TASK,
  payload,
});
export const deleteTask = (payload) => ({
  type: TYPE_TASK.DELETE_TASK,
  payload,
});
export const getAllTask = (payload) => ({
  type: TYPE_TASK.GET_ALL_TASK,
  payload,
});
export const getTaskById = (payload) => ({
  type: TYPE_TASK.GET_TASK_ID,
  payload,
});
