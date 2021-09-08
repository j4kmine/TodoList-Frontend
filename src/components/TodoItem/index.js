import React from 'react';
import styles from "./TodoItem.module.css";

const TodoItem = ({todos, handleComplete, handleDelete}) => {
  return (
    <div className={styles.todo__list}>
    {todos.length > 0 ? (
      todos.map((todo, index) => (
        <div
          key={index}
          className={
            todo.completed ? `${styles.todo__item} + ${styles.completed}` : styles.todo__item
          }
        >

          <p>{todo.task}</p>

          <button
            onClick={() => handleComplete(index)}
            className={`${styles.todo__button} + ${styles.complete}`}
          >
            {todo.completed ? "Uncomplete" : "Complete"}
          </button>

          <button
            onClick={() => handleDelete(index)}
            className={`${styles.todo__button} + ${styles.delete}`}
          >
            Delete
          </button>
        </div>
      ))
    ) : (
      <p className={styles.todo__empty}>No Todo Available:(</p>
    )}
  </div>
  )
}

export default TodoItem
