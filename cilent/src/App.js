import './App.css';
import {useState,useEffect} from 'react';
import Item from './components/item'
import axios from 'axios';
// import { deleteToDo, updateToDo } from '../../controllers/ToDoController';

function App() {
  const [text,setText]=useState("");
  const [todo,setTodo]=useState([]);
  const [isUpdating,setUpdating]=useState("");

useEffect(()=>{
axios.get("http://localhost:5000/get-todo")
.then((res)=>setTodo(res.data))
.catch((err)=>console.log(err))
})


const addUpdate=()=>{
if(isUpdating===""){
  axios.post("http://localhost:5000/save-todo",{text})
  .then((res)=>{
    console.log(res.data)
     setText("");
  })
  .catch((err)=>console.log(err))

}else{
  axios.post("http://localhost:5000/update-todo",{_id:isUpdating,text})
  .then((res)=>{
    console.log(res.data)
     setText("");
     setUpdating("");
  })
  .catch((err)=>console.log(err))
}
}

const deleteToDo=(_id)=>{
  axios.post("http://localhost:5000/delete-todo",{_id})
  .then((res)=>{
    console.log(res.data)
   
  })
  .catch((err)=>console.log(err))
}

const updateToDo=(_id,text)=>{
setUpdating(_id);
setText(text);
}


  return (
    <div className="App">
   <div className="container">
     <h1>TODO APP</h1>
     <div className="top">
      <input type="text" placeholder="write something..."
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <div className='add' onClick={addUpdate}>{isUpdating?"update":"Add"}</div>

     </div>
     <div className='list'>
       {todo.map(item=><Item 
       key={item._id} 
       text={item.text}
       remove={()=>deleteToDo(item._id)}
       update={()=>updateToDo(item._id,item.text)} />)}
       
     </div>
   </div>

    </div>
  );
}

export default App;
