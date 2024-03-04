import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export default function login() {
    function Button({value}) {
        return (
          <button 
            onClick={() => preventDefault(e)}
            className="btn btn-primary w-full">
            {value}
        </button>
        )
      }
      
      function Input({type, id, name, label, placeholder, autofocus}) {
        return (
          <label className="text-gray-500 block mt-3">{label}
            <input
              autoFocus={autofocus}
              type={type} 
              id={id} 
              name={name} 
              placeholder={placeholder}
              className="input input-bordered w-full max-w-xs bg-white"/>
          </label>
        )
      }
    
        return (
          <div className="flex justify-center items-center h-screen w-screen">
            <div style={{ borderColor: "#788CDE" }} className="border-t-8 rounded-sm bg-white p-9 shadow-2xl w-96">
              <h1 className="font-bold text-center block text-2xl">Log In</h1>
              <form className='flex flex-col gap-4'>
              <Input type="email" id="email" name="email" label="Email Address" placeholder="me@example.com" autofocus={true}/>
              <Input type="password" id="password" name="password" label="Password" placeholder="••••••••••" />
              <Link to = "/todo">
                <Button value="Login" />
              </Link>
              </form>
            </div>
          </div>
        )
      
}

