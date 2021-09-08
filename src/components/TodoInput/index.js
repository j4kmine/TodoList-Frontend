import styles from "./TodoInput.module.css";

const TodoInput = ({ handleSubmit, value, onChange}) => {
  return (
    <div className={styles.todo__form}>
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        onChange={onChange}
        type="text"
        placeholder="Add todo..."
      />
      <button>Add</button>
    </form>
  </div>
  )
}

export default TodoInput
