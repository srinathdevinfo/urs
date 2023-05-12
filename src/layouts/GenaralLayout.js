import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

const GenaralLayout = ({ children, type }) => {
  useEffect(() => {
    document.body.style.background = '#205387';
  }, []);
  return (
    <section className="ftco-section">
      <div className="container">
        {type === 'login'
          ? (
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5 mb-1">
                <h2 className="heading-section mb-0 pl-3">Welcome Back</h2>
                <p className="text-white mb-1 pl-3">Login to your account</p>
              </div>
            </div>
          )
          : (
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5 mb-1">
                <h2 className="heading-section mb-0 pl-3 pb-2"><Link to="/"><i className="fa fa-angle-left pr-2 fs-34 text-white" /></Link> Create Account</h2>
              </div>
            </div>
          )}
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="login-wrap">
                <div className="text-center">
                  <div className="w-100">
                    <h3 className="mb-4 pt-2">ABC COMPANY</h3>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>

  );
};

export default GenaralLayout;
