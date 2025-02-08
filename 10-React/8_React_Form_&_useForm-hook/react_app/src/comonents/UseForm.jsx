import React from 'react'
import { useForm } from "react-hook-form";
import "./Error.css"
const UseForm = () => {
    const { 
         register,
         handleSubmit, 
         watch, 
         reset,
         formState: { errors, isSubmitting} , 
        } = useForm();

const onSubmit = (data) => {
      console.log(data);
       reset();  
      };        
  return (
    <div>
      <h1>useFrom Hook in react</h1>
 
        <h1>Login Example</h1>
      <form onSubmit={handleSubmit(onSubmit)}  className='form-box'>
        <div>
          <label htmlFor="fname">Frist_Name:</label><br />
          <input id='fname'
           {...register("firstName",
            { required: "First Name is required" }
           )} 
           className={errors.firstName?"inputError":""}
            />
            {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lname">Last_Name:</label><br />
          <input id='lname' {...register("lastName",
            {required: "Last Name is required"}
            )}
            className={errors.lastName?"inputError":""} 
            />
             {errors.lastName && <p className='error'>{errors.lastName.message}</p>}

        </div>
        <div>
          <label htmlFor="pwd">Password:</label><br />
          <input 
          type="password"
          id='pwd'
            {...register("pwd",
             {required: "Password is required"}
          )}
          className={errors.pwd?"inputError":""}
           />
            {errors.pwd && <p className='error'>{errors.pwd.message}</p>}
        </div>
        <button disabled={isSubmitting} >
        {isSubmitting?"submitting...":"submit"}
          </button>
      </form>
    </div>
  )
}

export default UseForm
