import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "../core-components/task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

export default function TasksList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask()

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full justify-center" onClick={handleNewTask}>Nova Tarefa</Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  )
}








