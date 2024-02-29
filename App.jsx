import { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import profile from "./components/profile.jsx";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false }
      ]
    })
    setNewItem('');
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  function toggleTodo(id, completed) {
    console.log('Toggle Todo:', id, completed);

    setTodos((currentTodos) => {
      const updatedTodos = currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
      console.log('Updated Todos:', updatedTodos);
      return updatedTodos;
    });
  }


  return (
    <>
      <div className="drawer lg:drawer-open"> 
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-8 gap-4">
          <h1 className="header text-3xl font-bold">Tasks</h1>
          <form className="container new-item-form">
            <div className="flex flex-row gap-4">
              <label htmlFor="item" className=''>New Item</label>
              <input className = "input input-bordered w-full max-w-xs" type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}>
              </input>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
          </form>

          <ul className="flex-1 flex-row">
            {todos.map((todo, id) => {
              return (
                <li key={id} className=''>
                  <div className='bg-red-400 gap-4 my-4 justify-stretch'>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                  />
                  <label>{todo.title}</label>
                  <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><profile /></li>
          </ul>

        </div>
      </div>
    </>
  );
}

export default App
