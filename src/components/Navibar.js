import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';

const Navibar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = useCallback((e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/login');
  }, [dispatch]);
  return (
    <nav className="navbar navbar-expand-md navbar-gray bg-gray fixed-top">
      <Link className="navbar-brand" to="#/">ABC COMPANY</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse user-menu" id="navbarsExampleDefault">
        <a href="#/" className="cus-p-tb-2 d-flex align-items-center  ml-auto" data-toggle="dropdown" aria-expanded="false">
          <span className="hidden-xs u-name"> { user && user?.result?.first_name} {user?.result?.last_name}</span>
          <img src={user && user.result?.profile_image?.thumb} className="user-image current-user-img" />
        </a>
        <ul className="dropdown-menu dropdown-menu-top d-style-one">
          <li>
            <Link to="/edit-profile"><span>Edit Profile</span></Link>
          </li>
          <li>
            <Link onClick={(e) => { logOut(e); }} to="/"><span>Sign Out</span></Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navibar;
