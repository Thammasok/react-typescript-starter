import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import xxaTodo from 'actions/Todo'

// Types
import xxreStore from 'redux/types'

// Components
import Task from 'views/Todo/Task'

const TodoPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const todo = useSelector((state: xxreStore.TypeProps) => state.todo)

  const [newTask, setNewTask] = useState('')

  const handleForm = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    dispatch(xxaTodo.SetNewTask(newTask))
    setNewTask('')
  }

  useEffect(() => {
    const loadSpots = () => {
      dispatch(xxaTodo.GetTaskLists())
    }
    loadSpots()
  }, [dispatch])

  return (
    <div>
      <h2>Todo</h2>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Enter your new task."
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
        />
      </form>
      <hr />
      <h3>Todo Lists</h3>
      <ul>
        {todo
          ? todo.lists?.map((data: string) => (
              <Task key={(Math.random() * 10).toString()} data={data} />
            ))
          : null}
      </ul>
    </div>
  )
}

export default TodoPage
