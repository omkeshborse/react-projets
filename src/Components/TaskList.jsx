import React, { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 555, name: "playing game", completed: false },
    { id: 844, name: "Project Making", completed: true },
    { id: 414, name: "Eating Food", completed: false },
  ]);
  const [show, setShow] = useState(true);
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => id !== task.id));
  };
  const info = "random" ;
  return (
    <>
      <h1>Task List</h1>
      <button className="trigger" onClick={() => setShow(!show)}>
        toggle
      </button>
      <ul>
        {show &&
          tasks.map((task) => {
            return (
              <TaskCard info={info} key={task.id} task={task} handleDelete={handleDelete} />
            );
          })}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          laudantium? Suscipit nisi laboriosam perferendis ullam aliquid quis
          consectetur quo perspiciatis. Reiciendis atque odit sapiente vel sunt
          id voluptas labore voluptatum.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          laudantium? Suscipit nisi laboriosam perferendis ullam aliquid quis
          consectetur quo perspiciatis. Reiciendis atque odit sapiente vel sunt
          id voluptas labore voluptatum.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, exercitationem dicta hic tempora excepturi atque culpa ab, pariatur, cupiditate repellendus quibusdam natus provident rerum dolorum assumenda iure nostrum doloribus blanditiis!</p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit.</p>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          laudantium? Suscipit nisi laboriosam perferendis ullam aliquid quis
          consectetur quo perspiciatis. Reiciendis atque odit sapiente vel sunt
          id voluptas labore voluptatum.
        </p>
      </BoxCard>
    </>
  );
};

export default TaskList;
