import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import xxaTodo from 'actions/Todo'

// Types
import xxreStoreTypes from 'redux/types'

// Components
import Task from 'views/Todo/Task'
import Post from 'views/Todo/Post'

const TodoPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const todo = useSelector((state: xxreStoreTypes.Props) => state.todo)
  const post = useSelector((state: xxreStoreTypes.Props) => state.post)

  const [newTask, setNewTask] = useState('')

  const handleForm = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    dispatch(xxaTodo.SetNewTask(newTask))
    setNewTask('')
  }

  useEffect(() => {
    const loadTodoLists = () => {
      dispatch(xxaTodo.GetTaskLists())
      dispatch(xxaTodo.GetPostList())
    }
    loadTodoLists()
  }, [dispatch])

  return (
    <div>
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

      <div>
        <h2>Post Lists</h2>
        <ul>
          {post ? (
            post.lists?.map(data => (
              <Post key={data.id.toString()} data={data} />
            ))
          ) : (
            <li>No data.</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TodoPage
