import React, { useState } from 'react'

export default function Todolist() {

    const[todolist, setTodolist] = useState([]);
    const[tugas, setTugas] = useState("");

    const handleTugas = (e) => {
        setTugas(e.target.value);
    }
    const handleTask = () => {
        const task = {
            id : todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
            newTugas : tugas
        }
        setTodolist([...todolist, task])
    }
    const handleDelete = (id) => {
        setTodolist(todolist.filter((task)=> task.id !== id));
    }
    return (
        <div>
            <input onChange={handleTugas}/>
            <button onClick={handleTask}>tambah task</button>
            {todolist.map((task)=>{
                return (
                    <div>
                        <h1>{task.newTugas}</h1>
                        <button onClick={()=>handleDelete(task.id)}>x</button>
                    </div>
                )
            })}
        </div>
    )
}
