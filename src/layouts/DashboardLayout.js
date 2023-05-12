import { useEffect } from 'react';

import Navibar from '../components/Navibar';

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.background = '#fff';
  }, []);
  return (
    <>
      <Navibar />
      <main>

        {children}

        <footer className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12 ">
              <div className="d-flex justify-content-between footer-info">
                <p className="mb-2">Version 1.0</p>
                <ul><li>About Us</li><li>Privacy</li><li>Terms</li></ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default DashboardLayout;
