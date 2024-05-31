import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="container text-white">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mt-5">

            <ul className="nav nav-pills nav-justified mb-3" role="tablist">
              <li className="nav-item" role="presentation">
                <Link
                  className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveTab('login')}
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected={activeTab === 'login'}
                  to="#">
                  Login
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => setActiveTab('register')}
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected={activeTab === 'register'}
                  to="#"
                >
                  Register
                </Link>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`}
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form>
                <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#3b5998'}}>
                      <FontAwesomeIcon icon={faFacebookF} style={{color: '#fff'}} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#db4437'}}>
                      <FontAwesomeIcon icon={faGoogle} style={{color: '#fff'}} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#00acee'}}>
                      <FontAwesomeIcon icon={faTwitter} style={{color: '#fff'}} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#333'}}>
                      <FontAwesomeIcon icon={faGithub} style={{color: '#fff'}} />
                    </button>
                  </div>
                  <p className="text-center">or:</p>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginName" >
                      Email or Username:
                    </label>

                    <input type="email" id="loginName" className="form-control" placeholder='Email' />

                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginPassword">
                      Password:
                    </label>

                    <input type="password" id="loginPassword" className="form-control" placeholder='Password' />

                  </div>
                  <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                      <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                        <label className="form-check-label" htmlFor="loginCheck">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign in
                  </button>
                  <div className="text-center">
                    <p>
                      Not a member? <Link onClick={() => setActiveTab('register')}
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected={activeTab === 'register'}
                        to="#">Register</Link>
                    </p>
                  </div>
                </form>
              </div>
              <div
                className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form>
                <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#3b5998'}}>
                      <FontAwesomeIcon icon={faFacebookF} style={{color: '#fff'}} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#db4437'}}>
                      <FontAwesomeIcon icon={faGoogle} style={{color: '#fff'}} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#00acee'}}>
                      <FontAwesomeIcon icon={faTwitter} style={{color: '#fff'}} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{backgroundColor: '#333'}}>
                      <FontAwesomeIcon icon={faGithub} style={{color: '#fff'}} />
                    </button>
                  </div>
                  <p className="text-center">or:</p>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerName" >
                      Name:
                    </label>
                    <input type="text" id="registerName" className="form-control" placeholder='Name'/>
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerUsername">
                      Username:
                    </label>
                    <input type="text" id="registerUsername" className="form-control" placeholder='Username'/>  
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerEmail">
                      Email:
                    </label>
                    <input type="email" id="registerEmail" className="form-control" placeholder='Email'/>
                    
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerPassword">
                      Password:
                    </label>
                    <input type="password" id="registerPassword" className="form-control" placeholder='Password'/>
                    
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerRepeatPassword">
                      Repeat Password:
                    </label>
                    <input type="password" id="registerRepeatPassword" className="form-control" placeholder='Repeat Password'/>
                    
                  </div>
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input className="mr-3 me-2" type="checkbox" value="" id="registerCheck" defaultChecked />
                    <label className="form-check-label" htmlFor="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-3">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
