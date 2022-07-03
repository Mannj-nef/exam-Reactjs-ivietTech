import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTask } from "../../redux/actionsTask";

const TodoItem = ({ taskItem, handleDetail }) => {
  const dispatch = useDispatch();
  const taskDetail = useSelector((state) => state.taskReducer.taskItem);

  console.log(taskDetail);

  const handleRemoveTask = (e, id) => {
    e.stopPropagation();
    dispatch(actionTask.deleteTask(id));
  };

  const handleUpdateTask = (e, id) => {
    e.stopPropagation();
    dispatch(actionTask.getTaskById(id));
  };

  return (
    <div
      className="flex p-4 items-center rounded-lg shadow-md gap-3 mb-3 cursor-pointer"
      onClick={() => handleDetail(taskItem.id)}
    >
      <p className="flex-1">{taskItem.task}</p>
      <div className="flex gap-3">
        <span
          className="p-2 bg-red-500 text-white rounded-md"
          onClick={(e) => handleRemoveTask(e, taskItem.id)}
        >
          Xoá
        </span>
        <span
          className="p-2 bg-green-500 text-white rounded-md"
          onClick={(e) => handleUpdateTask(e, taskItem.id)}
        >
          Sửa
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
