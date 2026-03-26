import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "../core-components/task-item";
import useTasks from "../hooks/use-tasks";

export default function TasksList() {
  const {tasks} = useTasks();
  console.log(tasks)

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full justify-center">Nova Tarefa</Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  )
}








