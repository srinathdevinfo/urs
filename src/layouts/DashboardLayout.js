import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardLayout.css';
import { Footer } from '../components/Footer';
import Navibar from '../components/Navibar';

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.background = '#fff';
  }, []);
  return (
    <>
      <Navibar />
      <div className="container">

        {children}

      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
