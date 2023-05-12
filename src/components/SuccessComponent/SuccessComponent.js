import React from 'react';
import { Link } from 'react-router-dom';

const SuccessComponent = () => (
  <div className="text-center">
    <img src="./assets/correct.png" width={100} />
    <h2 className="font-weight-bold">Congratulation</h2>
    <p className="font-weight-bold">Your Account has been created Successfully.</p>
    <Link to="/login" className="form-control btn btn-primary rounded submit px-3">Go to Login</Link>
  </div>

);

export default SuccessComponent;
