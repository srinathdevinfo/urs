import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginComponent = () => {
  const navigate = useNavigate();

  return (

    <Formik
      initialValues={{ email: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else if (!values.password) {
          errors.password = 'Password cannot be empty ';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          navigate('/profile');
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="signin-form">

          <div className="form-group mt-3">
            <label htmlFor="username">Username</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 " />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter email address"
              className="form-control"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 " />
            <span className="fa fa-fw fa-eye field-icon toggle-password" />
          </div>
          <div className="form-group"><button type="submit" className="form-control btn btn-primary rounded submit px-3" disabled={isSubmitting}>Login</button></div>
          <div className="form-group d-md-flex">
            <div className="w-100 text-left">
              <label>Still Have No Account ? <Link to="/sign-up">SIGNUP</Link> Now</label>
            </div>
          </div>
        </Form>
      )}
    </Formik>

  );
};
export default LoginComponent;
