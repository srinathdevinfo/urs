import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GenaralLayout.css';
import { Footer } from '../components/Footer';

const GenaralLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.background = '#205387';
  }, []);
  return (
    <>

      <div className="container">
        <div className="auth-wrapper d-flex align-items-center justify-content-center">
          <div className="auth-inner">
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
};

export default GenaralLayout;
