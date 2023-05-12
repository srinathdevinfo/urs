import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignupComponent = () => {
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
        } else if (!values.code) {
          errors.code = 'Country Code cannot be empty ';
        } else if (!values.phone) {
          errors.phone = 'Phone No cannot be empty ';
        } else if (!values.confirmPassword) {
          errors.password = 'Password cannot be empty ';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          navigate('/success');
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="signin-form">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="form-group mt-3">
                <label htmlFor="username">First Name</label>

                <Field
                  type="text"
                  name="fname"
                  placeholder="Jone"
                  className="form-control"
                />
                <ErrorMessage name="fname" component="div" className="text-red-500 " />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group mt-3">
                <label htmlFor="username">Second Name</label>

                <Field
                  type="text"
                  name="lname"
                  placeholder=""
                  className="form-control"
                />
                <ErrorMessage name="lname" component="div" className="text-red-500 " />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Email Address</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
              className="form-control"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 " />

          </div>

          <div className="form-group ">
            <label htmlFor="username">Mobile Number</label>
            <div className="d-flex row-d-2">

              <Field
                type="text"
                name="code"
                placeholder="+94"
                className="form-control"
              />
              <ErrorMessage name="code" component="div" className="text-red-500 " />

              <Field
                type="text"
                name="phone"
                placeholder=""
                className="form-control"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 " />

            </div>
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
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Enter email address"
              className="form-control"
            />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 " />
          </div>
          <div className="form-group"><button type="submit" className="form-control btn btn-primary rounded submit px-3" disabled={isSubmitting}>Create Account</button></div>

        </Form>
      )}
    </Formik>
  );
};

export default SignupComponent;
