import React from 'react';
// import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './error.css'

// Define initial values
const initialValues = {
    userName:'',
    email: '',
    password: '',
  };
  
  // Define validation schema
  const validationSchema = Yup.object({
    userName:Yup.string().required("User name is requird"),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });
  // Define onSubmit function
const onSubmit = (values, { setSubmitting }) => {
    console.log(values); // Log form values
    setSubmitting(false);
  };


export default function MyFormik(){
    return(<>
    <h1>Formik in React</h1>
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} // Use the onSubmit variable
      >
         {({ isSubmitting }) => (
         <Form>
            <label htmlFor="uName">User Name:</label>
             <Field id="uName" type="text" name="userName" />
             <ErrorMessage name="userName" component="div"  className='error'/>
          <br />
          <label htmlFor="email">Email</label>
           <Field type="email" id="email" name="email" />
           <ErrorMessage name="email" component="div" className='error'/>
           <br />
           <label htmlFor="pwd">Password</label>
           <Field type="password" id="pwd" name="password" />
           <ErrorMessage name="password" component="div"  className='error'/>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}

    </Formik>
    </>)
}