import React from "react";

function TaskList() {
  <div className="tasks">
    {tasks.map((task) => (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDeleteTask={onDeleteTask}
      />
    ))}
  </div>;

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
