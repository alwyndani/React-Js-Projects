/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import styles from "./ShowTask.module.css";

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTasklist);
  };

  return (
    <div className={`container border border-success mt-4 ${styles.todo}`}>
      <section className="bg-primary-subtle showTask">
        <p className={styles.parabox}>
          <span>
            <span className="title pe-3">Todo</span>
            <span className="count">{tasklist.length}</span>
          </span>
          <button className="clearAll" onClick={() => setTasklist([])}>
            Clear All
          </button>
        </p>
        <hr className="mt-3" />

        <ul>
          {tasklist.map((todo) => (
            <li key={todo.id} className="d-flex">
              <p className="d-grid">
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <FaUserEdit
                onClick={() => handleEdit(todo.id)}
                className="text-primary"
              />
              <MdDeleteSweep
                onClick={() => handleDelete(todo.id)}
                className="text-danger"
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
