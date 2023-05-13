import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../components/Home/Home';
import { user } from '../actions/auth';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(user());
    // alert('o');
  }, []);
  return (
    <DashboardLayout><Home /></DashboardLayout>

  );
};

export default Profile;
