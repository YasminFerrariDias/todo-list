import Button from "./button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "../core-components/task-item";

export default function TasksList() {
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








