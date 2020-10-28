import React, { useState } from 'react';
import './App.css';
import { useForm } from "react-hook-form";




function App() {

  function onSubmit(formData) {
    console.log(formData);
  }

  console.log(errors)

  return (
    <div>
      <h1>react-hook-form</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label>Username</label>
        <input type="text" name="username" ref={register} />

        <label>Age</label>
        <input type="number" name="age" ref={register} />

        <span>
          <input type="checkbox" name="remember" ref={register} />
          <label>Remember Me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;