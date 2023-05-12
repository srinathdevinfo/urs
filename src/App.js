
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';

import Success from './screens/Success';

const App = () => (
  <Router>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/success" element={<Success />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  </Router>
);

export default App;
