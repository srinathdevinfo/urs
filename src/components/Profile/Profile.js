import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import axios from 'axios';

// { user } from '../../actions/auth';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState('');
  const [fname, setFname] = useState(user?.result?.first_name);
  const [lname, setLname] = useState(user?.result?.last_name);
  const [male, setMale] = useState(user?.result?.email);
  const [dob, setDob] = useState(user?.result?.dob);
  // const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    navigate('/login');
  }

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
            } if (!values.dob) {
              errors.dob = 'date of birth cannot be empty ';
            }

            if (!values.first_name) {
              errors.dob = 'First Name cannot be empty ';
            }
            if (!values.last_name) {
              errors.dob = 'Last Name cannot be empty ';
            }
            if (selected !== '') {
              errors.dob = 'Gender cannot be empty ';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const userinfo = JSON.parse(localStorage.getItem('user'));
            const config = {
              headers: {
                Authorization: `Bearer ${userinfo.access_token}`,
              },
            };
            // const url = 'api endpoint';

            const data = {
              first_name: values.first_name,
              last_name: values.last_name,
              dob: values.dob,
              gender: values.selected,
            };
            axios.put('https://mditest.elifeamerica.com/api/v1/profile', data, config)
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
            // setTimeout(() => {
            // navigate('/success');
            // alert(JSON.stringify(values, null, 2))
            setSubmitting(false);

            // }, 400);
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
                      name="first_name"
                      placeholder={user?.result?.first_name}
                      value={fname}
                      className="form-control"
                      onChange={(event) => { setFname(event.target.value); }}

                    />
                    <ErrorMessage name="first_name" component="div" className="text-red-500 " />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="form-group mt-3 font-weight-bold">
                    <label htmlFor="username">Second Name</label>

                    <Field
                      type="text"
                      name="last_name"
                      value={lname}
                      placeholder={user?.result?.last_name}
                      onChange={(event) => { setLname(event.target.value); }}
                      className="form-control"
                    />
                    <ErrorMessage name="last_name" component="div" className="text-red-500 " />
                  </div>
                </div>
              </div>

              <div className="form-group font-weight-bold">
                <label htmlFor="username">Email Address</label>
                <Field
                  type="email"
                  name="email"
                  value={male}
                  onChange={(event) => { setMale(event.target.value); }}
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
                  value={dob}
                  onChange={(event) => { setDob(event.target.value); }}
                  placeholder=""
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 " />
              </div>

              <div className="form-group font-weight-bold">
                <label htmlFor="password">Gender</label>

                <div className="row">
                  <div className="col-lg-4"> <span className={`btn btn-outline-dark ${selected === 'male' ? 'btn-primary' : ''}`} onClick={() => { setSelected('male'); }}>Male</span></div>
                  <div className="col-lg-4"> <span className={`btn btn-outline-dark ${selected === 'female' ? 'btn-primary' : ''}`} onClick={() => { setSelected('female'); }}>Female</span></div>
                  <div className="col-lg-4"> <span className={`btn btn-outline-dark ${selected === 'other' ? 'btn-primary' : ''}`} onClick={() => { setSelected('other'); }}>Other</span></div>

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
