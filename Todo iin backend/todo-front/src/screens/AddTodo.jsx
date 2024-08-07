/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import styles from './AddTodo.module.css'
// import axios from 'axios';

// export const AddTodo = ({ todo, setTodo, getTodo }) => {


//   const Add = async (e) => {
//     e.preventDefault();

//     const res = await axios.post('/api/todo/', todo);
//     console.log(res.data);
//     setTodo({
//       title: "",
//       descr: "",
//       date: "",
//       time: ""
//     });
//     getTodo();
//   }


//   return (
//     <div className='mt-5 text-center d-flex '>
//       <div className='row'>

//         <input onChange={(e) => {
//           setTodo({
//             title: e.target.value,
//             date: new Date().toISOString().slice(0, 10),
//             time: Date().slice(16, 21)
//           })
//         }}
//           value={todo.title || ""} type='text' placeholder='Enter your text' className=' bg-dark text-light' style={{ height: "50px" }} />

//         <input onChange={(e) => {
//           setTodo({
//             ...todo, descr: e.target.value, date: new Date().toISOString().slice(0, 10),
//             time: Date().slice(16, 21)
//           })
//         }} value={todo.descr || ""} type='text' placeholder='Description' className={styles.descr} />
//       </div>
//       <button onClick={Add} type="button" className="btn btn-info h5 mt-5" style={{ height: "50px" }}>Add Todo</button>
//     </div>

//   )
// }


import { useState } from 'react';
import styles from './AddTodo.module.css';
import axios from 'axios';

export const AddTodo = ({ todo, setTodo, getTodo }) => {

  const Add = async (e) => {
    e.preventDefault();

    const res = await axios.post('/api/todo/', todo);
    console.log(res.data);
    setTodo({
      title: "",
      descr: "",
      date: "",
      time: ""
    });
    getTodo();
  }

  return (
    <div className={styles.container}>
      <form onSubmit={Add} className={styles.inputContainer}>
        <input
          onChange={(e) => {
            setTodo({
              title: e.target.value,
              date: new Date().toISOString().slice(0, 10),
              time: new Date().toLocaleTimeString().slice(0, 5)
            });
          }}
          value={todo.title || ""}
          type='text'
          placeholder='Enter your text'
          className={`${styles.inputField} ${styles.titleInput}`}
        />

        <input
          onChange={(e) => {
            setTodo({
              ...todo,
              descr: e.target.value,
              date: new Date().toISOString().slice(0, 10),
              time: new Date().toLocaleTimeString().slice(0, 5)


            });
          }}
          value={todo.descr || ""}
          type='text'
          placeholder='Enter Your Description'
          className={`${styles.inputField} ${styles.descrInput}`}
        />

        <button type="submit" className={styles.addButton}>Add Todo</button>
      </form>
    </div>
  )
}