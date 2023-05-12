import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { register } from '../../actions/auth';

import 'react-toastify/dist/ReactToastify.css';

const SignupComponent = () => {
  const navigate = useNavigate();
  // const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  const [mail, setMail] = useState('');
  const [validMail, setValidMail] = useState(false);

  const handleEmail = async (e) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    setMail(e.target.value);
    setValidMail(false);
    if (mail.match(validRegex)) {
      axios.get(`https://mditest.elifeamerica.com/api/v1/email/check/${mail}`)
        .then((response) => {
          // handle success
          console.log(response);
          if (response.data.result.exist) { setValidMail(true); }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (message) {
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [message]);
  return (

    <Formik
      initialValues={{ email: '', password: '', first_name: '', last_name: '', code: '', mobile_number: '', confirm_password: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        } else if (validMail) {
          errors.email = 'email already in use ';
          // values.email = '';
        }

        if (!values.first_name) {
          errors.first_name = ' First Name cannot be empty ';
        }
        if (!values.last_name) {
          errors.last_name = ' Last  Name cannot be empty ';
        }
        if (!values.password) {
          errors.password = 'Password cannot be empty ';
        } if (!values.code) {
          errors.code = 'Country Code cannot be empty ';
        } if (!values.mobile_number) {
          errors.mobile_number = 'Phone No cannot be empty ';
        } if (!values.confirm_password) {
          errors.confirm_password = 'Password cannot be empty ';
        }
        if ((values.mobile_number + values.code).length > 15) {
          errors.confirm_password = 'The mobile number must not be greater than 15 characters. ';
        }

        return errors;
      }}
      onSubmit={(values) => {
        // alert(values.password);
        dispatch(

          register(values.first_name, values.last_name, values.email, values.password, values.confirm_password, values.code + values.mobile_number, '1994-01-16'),
          // (values.first_name, values.last_name, values.email, values.password, values.confirm_password, values.mobile_number)

        )
          .then(() => {
            navigate('/success');
          })
          .catch(() => {

          });

        // setTimeout(() => {
        //   navigate('/success');
        //   // alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="signin-form">
          <ToastContainer />
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="form-group mt-3">
                <label htmlFor="username">First Name</label>

                <Field
                  type="text"
                  name="first_name"
                  placeholder="Jone"
                  className="form-control"
                />

              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group mt-3">
                <label htmlFor="username">Second Name</label>

                <Field
                  type="text"
                  name="last_name"
                  placeholder=""
                  className="form-control"
                />

              </div>
            </div>

          </div>
          <div className="form-group text-center">

            <ErrorMessage name="last_name" component="div" className="text-red-500 " />
            <ErrorMessage name="first_name" component="div" className="text-red-500 " />

          </div>

          <div className="form-group">
            <label htmlFor="username">Email Address</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
              className="form-control"
              onKeyUp={(e) => { handleEmail(e); }}
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

              <Field
                type="text"
                name="mobile_number"
                placeholder=""
                className="form-control"
              />

            </div>
          </div>
          <div className="form-group text-center">

            <ErrorMessage name="code" component="div" className="text-red-500 " />
            <ErrorMessage name="mobile_number" component="div" className="text-red-500 " />

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
            <label htmlFor="password">Confirm Password</label>
            <Field
              type="password"
              name="confirm_password"
              placeholder="Enter email address"
              className="form-control"
            />
            <ErrorMessage name="confirm_password" component="div" className="text-red-500 " />
          </div>
          <div className="form-group"><button type="submit" className="form-control btn btn-primary rounded submit px-3" disabled={isSubmitting}>Create Account</button></div>

        </Form>
      )}
    </Formik>
  );
};

export default SignupComponent;
