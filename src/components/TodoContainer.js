import React from 'react'
import todos from '../data/todo.json'
import Todo from './Todo'

const TodoContainer = () => {
	return (
		<div className='todo-container'>
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo}></Todo>
			})}
		</div>
	)
}

export default TodoContainer
