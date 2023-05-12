
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';

import Success from './screens/Success';

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (

    <Router>
      <Routes>

        <Route path="/" element={isLoggedIn ? <Profile /> : <Login />} />:

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/success" element={<Success />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
