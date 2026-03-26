import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeleteTask, setIsDeleteTask] = useState(false);

  useEffect(() => {
    // Simulate loading for better UX, even though localStorage is instant
    const timer = setTimeout(() => setIsLoadingTasks(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating
      }
    ])
  }

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    )
  }

  async function updateTaskStatus(id: string, concluded: boolean) {
    setIsUpdatingTask(true);

    await delay(1000)

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, concluded } : task
      )
    )
    setIsUpdatingTask(false);
  }

  async function deleteTask(id: string) {
    setIsDeleteTask(true)

    await delay(1000)

    setTasks(tasks.filter((task) => task.id !== id))

    setIsDeleteTask(false)
  }

  return {
    tasks,
    updateTask,
    prepareTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeleteTask,
    tasksCount: tasks.length,
    concludedTaskCount: tasks.filter(task => task.concluded).length,
    isLoadingTasks,
  }
}

function setIsUpdatingTask(arg0: boolean) {
  throw new Error("Function not implemented.");
}
