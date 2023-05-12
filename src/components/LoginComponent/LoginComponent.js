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
        <Form>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>

            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <Link to="/sign-up">        sign up
            </Link>
          </p>
        </Form>
      )}
    </Formik>

  );
};
export default LoginComponent;
