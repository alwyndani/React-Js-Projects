// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// import axios from 'axios';
// import styles from './TodoList.module.css';
// import style from './AddTodo.module.css';
// import { useState } from 'react';

// export const TodoList = ({ todos, getTodo }) => {
//   const [editId, setEditId] = useState(null);
//   const [editedTodo, setEditedTodo] = useState({
//     title: '',
//     descr: '',
//     date: '',
//     time: ''
//   });

//   const handleEdit = async (todo) => {
//     try {
//       await axios.patch(`/api/todo/${todo._id}`, {
//         title: editedTodo.title,
//         descr: editedTodo.descr,
//         date: editedTodo.date,
//         time: editedTodo.time
//       });
//       getTodo();
//       setEditId(null);  // Exit edit mode
//     } catch (error) {
//       console.error('Update Error:', error.response.data || error.message);
//     }
//   };

//   const handleDlt = async (id) => {
//     try {
//       await axios.delete(`/api/todo/${id}`);
//       getTodo();
//     } catch (error) {
//       console.error('Deletion Error:', error.response.data || error.message);
//     }
//   };

//   return (
//     <div className="d-flex row ">
//       {todos.map((todo) => (
//         <div key={todo._id} className="mt-5 col-md-4">
//           <div className="card m-auto bg-primary-subtle w-25" style={{ minWidth: "270px" }}>
//             <div className="card-body">
//               <ul style={{ listStyleType: "none" }}>
//                 <li>
//                   {editId === todo._id ? (
//                     <>
//                       <div>
//                         <input
//                           onChange={(e) => setEditedTodo({
//                             ...editedTodo,
//                             title: e.target.value,
//                             date: new Date().toISOString().slice(0, 10),
//                             time: new Date().toISOString().slice(11, 16)
//                           })}
//                           value={editedTodo.title}
//                           type='text'
//                           placeholder='Enter your text'
//                           className='bg-dark w-50 text-light'
//                           style={{ height: "50px" }}
//                         />
//                         <input
//                           onChange={(e) => setEditedTodo({
//                             ...editedTodo,
//                             descr: e.target.value,
//                             date: new Date().toISOString().slice(0, 10),
//                             time: new Date().toISOString().slice(11, 16)
//                           })}
//                           value={editedTodo.descr}
//                           type='text'
//                           placeholder='Description'
//                           className={`${style.descr} bg-dark p-2 text-light mt-1 h-25 w-50 d-block`}
//                         />
//                       </div>
//                     </>
//                   ) : (
//                     <div>
//                       <h1 style={{ position: "relative" }}>{todo.title}</h1>
//                       <span className={styles.inputSpan}><input type="checkbox" /></span>
//                       <p>{todo.descr}</p>
//                       <p><span className='me-3'>{new Date().toISOString().slice(0, 10)}</span><span>{Date().slice(16, 21)}</span></p>
//                     </div>
//                   )}
//                   <div className="d-flex justify-content-between mt-3">
//                     {editId === todo._id ? (
//                       <button onClick={() => handleEdit(todo)} type="button" className="btn btn-info">Update</button>
//                     ) : (
//                       <button onClick={() => {
//                         setEditId(todo._id);
//                         setEditedTodo({
//                           title: todo.title,
//                           descr: todo.descr,
//                           date: todo.date,
//                           time: todo.time
//                         });
//                       }} type="button" className="btn btn-info">Edit</button>
//                     )}
//                     <button onClick={() => handleDlt(todo._id)} type="button" className="btn btn-info">Delete</button>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };


/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import axios from 'axios';
import styles from './TodoList.module.css';
import style from './AddTodo.module.css';
import { useState } from 'react';

export const TodoList = ({ todos, getTodo }) => {
  const [editId, setEditId] = useState(null);
  const [editedTodo, setEditedTodo] = useState({
    title: '',
    descr: '',
    date: '',
    time: ''
  });

  const handleEdit = async (todo) => {
    try {
      await axios.patch(`/api/todo/${todo._id}`, {
        title: editedTodo.title,
        descr: editedTodo.descr,
        date: editedTodo.date,
        time: editedTodo.time
      });
      getTodo();
      setEditId(null);  // Exit edit mode
    } catch (error) {
      console.error('Update Error:', error.response?.data || error.message);
    }
  };

  const handleDlt = async (id) => {
    try {
      await axios.delete(`/api/todo/${id}`);
      getTodo();
    } catch (error) {
      console.error('Deletion Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className={styles['card-container']}>
      {todos.map((todo) => (
        <div key={todo._id} className={styles.card}>
          <div className={styles['card-body']}>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                {editId === todo._id ? (
                  <div>
                    <input
                      onChange={(e) => setEditedTodo({
                        ...editedTodo,
                        title: e.target.value,
                        date: new Date().toISOString().slice(0, 10),
                        time: new Date().toISOString().slice(11, 16)
                      })}
                      value={editedTodo.title}
                      type='text'
                      placeholder='Enter your text'
                      className='bg-dark w-100 text-light'
                      style={{ height: "50px" }}
                    />
                    <input
                      onChange={(e) => setEditedTodo({
                        ...editedTodo,
                        descr: e.target.value,
                        date: new Date().toISOString().slice(0, 10),
                        time: new Date().toISOString().slice(11, 16)
                      })}
                      value={editedTodo.descr}
                      type='text'
                      placeholder='Description'
                      className={`${style.descr} bg-dark p-2 text-light mt-1 w-100`}
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <button onClick={() => handleEdit(todo)} type="button" className="btn btn-info">Update</button>
                      <button onClick={() => setEditId(null)} type="button" className="btn btn-secondary">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1>{todo.title}</h1>
                    <span className={styles['inputSpan']}><input type="checkbox" /></span>
                    <p>{todo.descr}</p>
                    <p><span>{new Date(todo.date).toLocaleDateString()}</span> <span>{todo.time}</span></p>
                    <div className="d-flex justify-content-between mt-3">
                      <button onClick={() => {
                        setEditId(todo._id);
                        setEditedTodo({
                          title: todo.title,
                          descr: todo.descr,
                          date: todo.date,
                          time: todo.time
                        });
                      }} type="button" className="btn btn-danger">Edit</button>
                      <button onClick={() => handleDlt(todo._id)} type="button" className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};