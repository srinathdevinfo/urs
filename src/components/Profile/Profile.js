import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <section className="profile-section container mh-85">

      <div className="row justify-content-center">
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
            } else if (!values.dob) {
              errors.dob = 'date of birth cannot be empty ';
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
              <h3 className=" text-center font-weight-bold">Edit Profile</h3>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="form-group mt-3 font-weight-bold">
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
                  <div className="form-group mt-3 font-weight-bold">
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

              <div className="form-group font-weight-bold">
                <label htmlFor="username">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 " />

              </div>

              <div className="form-group font-weight-bold">
                <label htmlFor="password">Date of Birth</label>
                <Field
                  type="text"
                  name="dob"
                  placeholder=""
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 " />
              </div>

              <div className="form-group font-weight-bold">
                <label htmlFor="password">Gender</label>

                <div className="row">
                  <div className="col-lg-4"> <button type="button" className="btn btn-outline-dark">Male</button></div>
                  <div className="col-lg-4"> <button type="button" className="btn btn-outline-dark">Female</button></div>
                  <div className="col-lg-4"> <button type="button" className="btn btn-outline-dark">Other</button></div>

                </div>
              </div>

              <div className="form-group"><button type="submit" className="form-control btn btn-primary rounded submit px-3" disabled={isSubmitting}>Update Profile Details</button></div>

            </Form>
          )}
        </Formik>
      </div>

    </section>
  );
};

export default Profile;
