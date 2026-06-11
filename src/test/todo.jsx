import React,{useState,useEffect} from 'react';

const ToDoList =() =>{

const [todos, setTodos] = useState([]);
const [newTask, setNewTask] = useState("");
const[editIndex,setEditIndex]=useState(null);
const[editText,setEditText]=useState("");

/// loads todos from local storage
useEffect (()=>{
 const savedTodos = JSON.parse(localStorage.getItem("todos"))
   if(savedTodos){
      setTodos(savedTodos);
    }
},[])


const addToDo=()=>{
 if(!newTask.trim()) return;

  setTodos([...todos,{text:newTask , done:false}]);
  setNewTask("");
}


useEffect(()=>{
 localStorage.setItem("todos",JSON.stringify(todos));


},[todos])

const toggleDone =(index)=>{
  const updated =[...todos];
  updated[index].done = !updated[index].done;
  setTodos(updated);
}


const deleteTodo=(index)=>{
  setTodos(todos.filter((_, i)=>i !==index))
}

const  startEdit = (index) =>{
  setEditIndex();
  setEditText(todos[index].text);
}


const saveEdit =() =>{
 const updated =[...todos];
 updated[editIndex].text=editText;
 setTodos (updated);
 setEditIndex(null);
 setEditText("");

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

  {todos.map((todo,index)=>(
    <li
    key={index}
     className="flex items-center justify-between bg-gray-50 p-3 rounded-x shadow-sm hover:shadow-md transition">

    {editIndex === index ? (<div className="flex w-full gap-2">
      <input
      type="text"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
      />

    
      <buttoon
      onClick={saveEdit}
      className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-400"
      
      >

       save

      </buttoon>
    </div>):(<>
    
    <span
      onClick={() => toggleDone(index)}
      className={`flex 1 cursor-pointer ${todo.done ? " text-gray-500" : ""}`}
      >
        {todo.text}
    </span>
    <div className=""></div>
    
    </>)}

    </li>

  ))}

  </ul>
 </div>

</div>

);



}

export default ToDoList;