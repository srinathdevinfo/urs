import React from 'react';

const SignupComponent = () => (
  <form action="#" className="signin-form">
    <div className="row">
      <div className="col-12 col-sm-6">
        <div className="form-group mt-3">
          <label htmlFor="username">First Name</label>
          <input type="text" className="form-control" placeholder="Jone" required />
        </div>
      </div>
      <div className="col-12 col-sm-6">
        <div className="form-group mt-3">
          <label htmlFor="username">Second Name</label>
          <input type="text" className="form-control" required />
        </div>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="username">Email Address</label>
      <input type="text" className="form-control" required />
    </div>

    <div className="form-group ">
      <label htmlFor="username">Mobile Number</label>
      <div className="d-flex row-d-2">
        <input type="text" className="form-control" placeholder="+94" required />
        <input type="text" className="form-control" required />
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input id="password-field" type="password" className="form-control" required />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input id="password-field" type="password" className="form-control" required />
    </div>
    <div className="form-group"><button type="submit" className="form-control btn btn-primary rounded submit px-3">Create Account</button></div>
  </form>
);

export default SignupComponent;
