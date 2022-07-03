import React from "react";
import "./style.scss";

const DetailItem = ({ taskDetail, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="bg-white flex justify-center flex-col items-center w-[400px] p-10 rounded-lg min-h-[400px] cursor-default">
        <p>Detail</p>
        <p>id: {taskDetail.id}</p>
        <p>Task: {taskDetail.task}</p>
      </div>
    </div>
  );
};

export default DetailItem;
