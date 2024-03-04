// App.js
import { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { IoIosWarning } from "react-icons/io";
import './App.css';
import AddForm from '../components/addForm';
import Profile from '../components/profile';

import { Link } from "react-router-dom";


function App() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [darkModeChecked, setDarkMode] = useState(false);

  function handleDarkMode(){
    setDarkMode(!darkModeChecked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === '') {
      document.getElementById('my_modal_1').showModal();
    } else {
      if (editingTodo) {
        setTodos((currentTodos) =>
          currentTodos.map((todo) =>
            todo.id === editingTodo.id ? { ...todo, title: newItem } : todo
          )
        );
        setEditingTodo(null);
      } else {
        setTodos((currentTodos) => [
          ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false }
        ]);
      }
      setNewItem('');
    }
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
    if (editingTodo && editingTodo.id === id) {
      setEditingTodo(null);
      setNewItem('');
    }
  }

  function filterTodoCompleted(bool) {
    setShowCompleted(bool);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function editTodo(id) {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
    setNewItem(todoToEdit.title);
  }

  function cancelEdit() {
    setEditingTodo(null);
    setNewItem('');
  }

  const filteredTodos = showCompleted ? todos.filter((todo) => todo.completed) : todos;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col m-8">
          <AddForm newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
          <div className='flex flex-row gap-4 justify-end m-4'>
            <input
              className='checkbox'
              type="checkbox"
              onChange={(e) => filterTodoCompleted(e.target.checked)}
              checked={showCompleted}
            />
            <span>Completed Tasks</span>
          </div>
          <ul className="flex-1 flex-row">
            <div className=''>
              {filteredTodos.map((todo, id) => (
                <li key={id} className='my-2'>
                  <div className='flex items-center justify-between p-4 bg-red-400 rounded-md task'>
                    <div className="flex items-center">
                      <input
                        className='checkbox mr-4'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id, !todo.completed)}
                      />
                      {editingTodo && editingTodo.id === todo.id ? (
                        <input
                          type="text"
                          value={newItem}
                          onChange={(e) => setNewItem(e.target.value)}
                        />
                      ) : (
                        <label className="ml-2">{todo.title}</label>
                      )}
                    </div>
                    <div className='justify-between'>
                      {editingTodo && editingTodo.id === todo.id ? (
                        <>
                          <button className="btn btn-outline btn-warning mx-4" onClick={cancelEdit}>Cancel</button>
                          <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
                        </>
                      ) : (
                        <>
                          <button className="btn btn-outline btn-warning mx-4" onClick={() => editTodo(todo.id)}>Edit</button>
                          <button className="btn btn-error" onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </ul>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu w-80 min-h-full drawer-color text-base-content justify-between">
            <li>
              <Profile />
            </li>
            <Link to = "/">
            <li>
              <button className='flex justify-between h-16 text-3xl items-center'>
                <CiLogout className='text-red-400' />   
                <span className='font-bold text-2xl'>Logout</span>
              </button>
            </li>
            </Link>
            {/* <input type="checkbox" className="toggle" checked = {darkModeChecked} onChange={handleDarkMode}/> */}
          </ul>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className='flex flex-row m-2'>
            <IoIosWarning className='text-6xl' />
            <div className='flex flex-col gap-2 mx-2'>
              <h3 className="font-bold text-lg">Warning</h3>
              <p className="">You didn't input any text on to-do form.</p>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default App;
