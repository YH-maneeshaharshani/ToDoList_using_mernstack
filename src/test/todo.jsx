import React,{useState,useEffect} from 'react';

const ToDoList =() =>{

const [todos, setTodos] = useState([]);
const [newTask, setNewTask] = useState("");
const addToDo=()=>{
 if(!newTask.trim()) return;

  setTodos([...todos,{text:newTask , done:false}]);
  setNewTask("");

}
return(
<div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
{/*Designn inner card component*/}
 <div className="bg-white p-6 w-full rounded-2xl">
    <h1 className="text-2xl font-semibold text-center text-slate-800 mb-6">My To Do List</h1>
 {/*Add new todos*/}

 <div className="flex gap-2 mb-4">
 <input
 
 type="text"
 placeholder="Enter a new task ......"
 value={newTask}
 onChange={(e) => setNewTask(e.target.value)}
 className="flex-1 border runded-xl px-3 py-2  focus:outline-none focus:ring-2 focus:ring-slate-400"


 />
 <button 
 onClick={addToDo}
 className="bg-slate-600 text-white px-4 py-2 rounded-xl hover:bg-slate-500" >
  Add 
 </button>
  </div>
  {/*my to do list*/}
  <ul className="space-y-3">
  {todos.length === 0 && (
    <p className="text-center text-gray-500">No tasks yet</p>
  )}

  </ul>
 </div>

</div>

);



}

export default ToDoList;