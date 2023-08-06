import React from "react";

const TaskCard = ({ task , handleDelete , info }) => {
  return (
    <li  className={task.completed ? "completed" : "incomplete"} >
      {task.id} - {task.name} -{info}
      <button
        className="delete"
        onClick={() => handleDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
