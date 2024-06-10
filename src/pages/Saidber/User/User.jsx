// import React,{useState,useEffect} from 'react'
// import './User.css'
// import axios from 'axios'
// import Loading from '../../../components/Loading/Loading'

// const User = () => {
//   const [user,setUser] = useState([])
//   const [page, setPage] = useState(1)
//   const [lmit, setLmit] = useState(2)
//   const [loading, setLoading] = useState(false)
//   console.log(page);



//     useEffect(() =>{
//       setLoading(true)
//      axios
//      .get(`https://jsonplaceholder.typicode.com/users?_start=${page}&_limit=${lmit}`)
//      .then((res) =>{
//       setUser(res.data);
//      })
//      .catch(arr =>{
//       console.log('>>>>>>>>>>>>>>>', arr);
//      }) 

//      .finally(() => { setLoading(false)})
//     },[page, lmit])

//     let data = user?.map((el, inx) =>(
//       <tr key={el.id}>
//         <td>{inx+1}</td>
//         <td>{el.name}</td>
//         <td>{el.username}</td>
//         <td>{el.email}</td>
//         <td>{el.address.street}</td>
//       </tr>
//     ))

//     const changePage = (type) => {
//       if (type === "prev") {
//         if(page > 1) {

//           setPage(prev => prev - 1)
//         }
//       }else {
//         setPage(prev => prev + 1)
//       }
//     } 
//   return (
//     <  >
//         <h1 className='ali'>User</h1>

      
//       <div className='smth'>
//       <div className="">
//           <div className="sele">
//             <select onChange={(e) => setLmit(e.target.value)} className='form-control  my-2'>
//               <option value="" selected>Select lmit</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//               <option value="7">7</option>
//             </select>
//           </div>
//         </div>
       
//         {
//           loading ? <Loading/> : <></>
//         }
//         <table className=' table table-bordered table-hover table-striped'>

//               <thead className=''>
//                 <tr>
//                   <td>T/R</td> 
//                   <td>Name</td>
//                   <td>Family</td>
//                   <td>Email</td>
//                   <td>Adres</td>
//                 </tr>
//               </thead>

//               <tbody>
                
//                   {data}
//               </tbody>


//             </table>

//             <div className="btn d-flex align-items-center gap-3">
//               <button  onClick={() => changePage("prev")}>Prev</button>
//               <p className='fs-3'>{page}</p>
//               <button onClick={() => changePage("next")}>Next</button>
//             </div>
//             </div>
//     </>
//   )
// }

// export default User


import React, { useState } from 'react';
import { Container, Grid, Paper, TextField, Button, List, ListItem, ListItemText, IconButton, Select, MenuItem } from '@mui/material';
// import { Delete , DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('open');
  const [editTask, setEditTask] = useState(null);

  const addTask = () => {
    setTasks([...tasks, { title: newTaskTitle, status: newTaskStatus }]);
    setNewTaskTitle('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const changeStatus = (index, status) => {
    const updatedTasks = tasks.map((task, i) => i === index ? { ...task, status } : task);
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditTask(index);
    setNewTaskTitle(tasks[index].title);
    setNewTaskStatus(tasks[index].status);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task, i) => i === editTask ? { title: newTaskTitle, status: newTaskStatus } : task);
    setTasks(updatedTasks);
    setNewTaskTitle('');
    setEditTask(null);
  };

  return (
    <Container>
      <h1>Task Manager</h1>

      <Paper elevation={3} style={{ padding: '10px', marginTop: '20px', marginBottom: '50px' }}>
        <h2>{editTask !== null ? 'Edit Task' : 'Add Task'}</h2>
        <TextField
          label="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          fullWidth
        />
        <Select
        required
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          {['open', 'pending', 'inprog', 'complete'].map((status) => (
            <MenuItem required key={status} value={status}>{status}</MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={editTask !== null ? updateTask : addTask}
          style={{ marginTop: '10px' }}
        >
          {editTask !== null ? 'Update Task' : 'Add Task'}
        </Button>
      </Paper>
      <Grid container spacing={3} >
        {['open', 'pending', 'inprog', 'complete'].map((status) => (
          <Grid item xs={3} key={status}>
            <Paper elevation={3} style={{ padding: '10px' , flexWrap: 'wrap'}}>
              <h2>{status}</h2>
              <List style={{flexWrap: 'wrap'}} >
                {tasks.filter(task => task.status === status).map((task, index) => (
                  <ListItem key={index} >
                    <ListItemText primary={task.title} />
                    <IconButton edge="end" aria-label="edit" onClick={() => startEditTask(index)}>
                      {/* <EditIcon /> */}
                      <FaRegEdit />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                      {/* <DeleteIcon /> */}
                      <FaTrashAlt />

                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
   
    </Container>
  );
};

export default App;
