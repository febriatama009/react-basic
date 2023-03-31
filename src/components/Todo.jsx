import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTask = (e) => {
    e.preventDefault();

    setTasks((prevTask) => [
      ...prevTask,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        complete: false,
      },
    ]);
    setNewTask("");
  };

  function handleCompleteTask(id) {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });

    setTasks(updateTask);
  }

  function handleRemoveTask(id) {
    const removeTask = tasks.filter((task) => task.id !== id);
    setTasks(removeTask);
  }

  return (
    <>
      <Card>
        <Card.Title>Add your Todo List Now</Card.Title>
        <Card.Body>
          <form>
            <div className="flex items-center gap-x-2">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button
                className="bg-green-500"
                text={"Add Task"}
                onClick={handleTask}
              />
            </div>
          </form>

          {tasks.length > 0 ? (
            <ol className="space-y-1">
              {tasks.map((task) => (
                <li key={task.id} className="flex gap-x-4">
                  {task.name}
                  {task.complete ? "Done" : "Working"}

                  <div className="flex gap-x-2">
                    <button onClick={() => handleCompleteTask(task.id)}>
                      Mark As {task.complete ? "Incomplete" : "Complete"}
                    </button>
                    <button onClick={() => handleRemoveTask(task.id)}>
                      Remove Task
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          ) : null}
        </Card.Body>
        <Card.Footer>You Have {tasks.length} Task</Card.Footer>
      </Card>
    </>
  );
};

export default Todo;
