import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from 'yup'

const Schema = yup.object().shape({
  username: yup.string().required().min(3),
  email: yup.string().email().required(),
  password: yup.string().required().min(5)
});

function App() {
  const { handleSubmit, register, errors } = useForm({ validationSchema: Schema });
  

  function onSubmit(data) {
    console.log(data);
  }
  console.log(errors);

  return (
    <div>
      <h3>react-hook-form</h3>
      <h3>User Sign Up</h3>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type="text" name="username" ref={register} />
        {errors.username && <p>{errors.username.message}</p>}
        <label>Email</label>
        <input type="text" name="email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Password</label>
        <input type="text" name="password" ref={register} />
        {errors.password && <p>{errors.password.message}</p>}

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
