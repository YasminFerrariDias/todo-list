import Badge from "../components/badge"
import Text from "../components/text"
import useTask from "../hooks/use-task"

export default function TasksSummary() {
  const { tasksCount, concludedTaskCount } = useTask()

  return <>
    <div className="flex items-center gap-2">
      <Text variant="body-sm-bold" className="!text-gray-300">Tarefas Criadas</Text>
      <Badge variant="secondary">{tasksCount}</Badge>
    </div>
    <div className="flex items-center gap-2">
      <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
      <Badge variant="primary">{concludedTaskCount} de {tasksCount}</Badge>
    </div>
  </>
}
