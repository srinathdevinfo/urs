import React from 'react';

const Home = () => (
  <section className="profile-section container mh-85">

    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-6 profile-con pb-5">
        <div className="d-flex align-items-end">
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle img-thumbnail" />
          <div className="w-100 pl-5"><h4 className="mb-0">Welcome</h4><h2 className="my-0">Mr. Jone Boker</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-5 col-lg-5 profile-con">
        <div className="row">
          <div className="col-6 col-md-6">
            <label>E Mail Address</label>
          </div>
          <div className="col-6 col-md-6 text-right">
            <p>Jone@mail.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6">
            <label>Name</label>
          </div>
          <div className="col-6 col-md-6 text-right">
            <p>Jone Boker</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6">
            <label>Gender</label>
          </div>
          <div className="col-6 col-md-6 text-right">
            <p>Male</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6">
            <label>Date of Birth</label>
          </div>
          <div className="col-6 col-md-6 text-right">
            <p>31-07-1989</p>
          </div>
        </div>
      </div>
    </div>

  </section>

);

export default Home;
