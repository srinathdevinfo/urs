import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  // const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const FILE_INPUT = document.querySelector('input[type=file]');
  const handleUpload = (e) => {
    e.preventDefault();
    // const UPLOAD_BUTTON = document.getElementById('upload-button');

    FILE_INPUT.click();
  };

  const handleImageUpload = async (e) => {
    const AVATAR = document.getElementById('avatar');
    const photo = FILE_INPUT.files[0];
    console.log({ photo });
    const formData = new FormData();

    formData.append('files[0]', 'profile_image');

    AVATAR.src = URL.createObjectURL(e.target.files[0]);
    AVATAR.onload = function () {
      URL.revokeObjectURL(AVATAR.src); // free memory
    };

    const userinfo = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        Authorization: `Bearer ${userinfo.access_token}`,
      },
    };
    // const url = 'api endpoint';

    axios.put('https://mditest.elifeamerica.com/api/v1/profile', formData, config)
      .then((res) => {
        console.log(res);
        toast.success('success', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        // dispatch(user());
      })
      .catch((err) => {
        console.log(err);
        toast.error('error', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  // UPLOAD_BUTTON.addEventListener('click', () => FILE_INPUT.click());
  // FILE_INPUT.addEventListener('change', (event) => {
  //   const file = event.target.files[0];

  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);

  //   reader.onloadend = () => {
  //     AVATAR.setAttribute('aria-label', file.name);
  //     AVATAR.style.background = `url(${reader.result}) center center/cover`;
  //   };
  // });

  return (
    <section className="profile-section container mh-85">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6 profile-con pb-5">
          <div className="d-flex align-items-end">

            <input type="file" name="image" id="image" accept="image/*" onChange={(e) => handleImageUpload(e)} />
            <div id="preview-wrapper">
              <div id="preview"> <img src={user && user.result?.profile_image?.thumb} className="rounded-circle img-thumbnail" id="avatar" />
                <button
                  id="upload-button"
                  aria-label="upload image"
                  aria-describedby="image"
                  type="button"
                  onClick={(e) => { handleUpload(e); }}
                >
                  +
                </button>
              </div>

            </div>

            <div className="w-100 pl-5"><h4 className="mb-0">Welcome</h4>
              <h2 className="my-0">Mr. {user && user?.result?.first_name} { user && user?.result?.last_name} </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-5 profile-con">
          <div className="row">
            <div className="col-6 col-md-6">
              <label>E Mail Address</label>
            </div>
            <div className="col-6 col-md-6 text-right">
              <p>{user && user?.result?.email}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6">
              <label>Name</label>
            </div>
            <div className="col-6 col-md-6 text-right">
              <p>{user && user?.result?.first_name} {user?.result?.last_name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6">
              <label>Gender</label>
            </div>
            <div className="col-6 col-md-6 text-right">
              <p>{user && user?.result?.gender}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6">
              <label>Date of Birth</label>
            </div>
            <div className="col-6 col-md-6 text-right">
              <p>{user && user?.result?.dob}</p>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
};

export default Home;
