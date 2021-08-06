import xxaTodo from 'actions/Todo'
import { useDispatch } from 'react-redux'

const Task = ({ data }: { data: string }): JSX.Element => {
  const dispatch = useDispatch()

  const handleTaskCompleted = (event: { target: { value: string } }) => {
    dispatch(xxaTodo.SetTaskCompleted(event.target.value))
  }

  return (
    <li key={`task-${(Math.random() * 10).toString()}`}>
      <label htmlFor={`task-checkbox-${data}`}>
        <input
          id={`task-checkbox-${data}`}
          type="checkbox"
          onChange={handleTaskCompleted}
          value={data}
        />
        {data}
      </label>
    </li>
  )
}

export default Task
