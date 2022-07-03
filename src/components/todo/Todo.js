import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionTask } from "../../redux/actionsTask";
import DetailItem from "./DetailItem";
import TodoItem from "./TodoItem";

const Todo = ({ children }) => {
  const tasks = useSelector((state) => state.taskReducer.taskList);
  const taskDetail = useSelector((state) => state.taskReducer.taskItem);
  const dispatch = useDispatch();
  const [isDetail, setIsDetail] = useState(false);

  useEffect(() => {
    dispatch(actionTask.getAllTask());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDetailItem = (id) => {
    dispatch(actionTask.getTaskById(id));
    setIsDetail(true);
  };

  const handelCloseDetailModal = (e) => {
    setIsDetail(false);
  };

  return (
    <div className="max-w-[600px] m-auto p-10 shadow-xl rounded-lg">
      {/* Form */}
      {children}

      {/* tasks */}
      {tasks?.length > 0 &&
        tasks.map(
          (taskItem) =>
            taskItem !== null && (
              <TodoItem
                key={taskItem.id}
                taskItem={taskItem}
                handleDetail={handleDetailItem}
              ></TodoItem>
            )
        )}

      {/* Detail */}
      {isDetail && taskDetail && (
        <DetailItem
          taskDetail={taskDetail}
          onClose={handelCloseDetailModal}
        ></DetailItem>
      )}
    </div>
  );
};

export default Todo;
