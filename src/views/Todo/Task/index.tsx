import xxaTodo from 'actions/Todo'
import { useDispatch } from 'react-redux'

import TaskPropTypes from 'views/Todo/Task/types'

const Task: React.FunctionComponent<TaskPropTypes> = ({ data }) => {
  const dispatch = useDispatch()

  const handleTaskCompleted = (event: { target: { value: string } }) => {
    dispatch(xxaTodo.SetTaskCompleted(event.target.value))
  }

  return (
    <li>
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
