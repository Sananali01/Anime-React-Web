import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("You have been signed in successfully!");
      setTimeout(() => {
        window.location.href = '/dashboard'; // Redirect to the dashboard
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (error) {
      toast.error("Error logging in. Please check your credentials.");
      console.error("Error logging in:", error);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Signed in with ${provider.providerId} successfully!`);
      setTimeout(() => {
        window.location.href = '/dashboard'; // Redirect to the dashboard
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (error) {
      toast.error(`Error signing in with ${provider.providerId}. Please try again.`);
      console.error("Error signing in:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("You have been signed up successfully!");
      setTimeout(() => {
        window.location.href = '/dashboard'; // Redirect to the dashboard
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (error) {
      toast.error("Error registering. Please try again.");
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="container text-white">
      <ToastContainer />
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
                  to="#"
                >
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
                <form onSubmit={handleLogin}>
                  <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: '#3b5998' }} onClick={() => handleSocialLogin(new FacebookAuthProvider())}>
                      <FontAwesomeIcon icon={faFacebookF} style={{ color: '#fff' }} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: '#db4437' }} onClick={() => handleSocialLogin(new GoogleAuthProvider())}>
                      <FontAwesomeIcon icon={faGoogle} style={{ color: '#fff' }} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: '#333' }} onClick={() => handleSocialLogin(new GithubAuthProvider())}>
                      <FontAwesomeIcon icon={faGithub} style={{ color: '#fff' }} />
                    </button>
                  </div>
                  <p className="text-center">or:</p>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginEmail">Email:</label>
                    <input
                      type="email"
                      id="loginEmail"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="loginPassword">Password:</label>
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                </form>
              </div>

              <div
                className={`tab-pane fade ${activeTab === 'register' ? 'show active' : ''}`}
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form onSubmit={handleRegister}>
                  <div className="text-center mb-3">
                    <p>Sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: '#3b5998' }} onClick={() => handleSocialLogin(new FacebookAuthProvider())}>
                      <FontAwesomeIcon icon={faFacebookF} style={{ color: '#fff' }} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: '#db4437' }} onClick={() => handleSocialLogin(new GoogleAuthProvider())}>
                      <FontAwesomeIcon icon={faGoogle} style={{ color: '#fff' }} />
                    </button>
                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: '#333' }} onClick={() => handleSocialLogin(new
GithubAuthProvider())}>
<FontAwesomeIcon icon={faGithub} style={{ color: '#fff' }} />
</button>
</div>
<p className="text-center">or:</p>
<div className="form-outline mb-4">
<label className="form-label" htmlFor="registerName">Name:</label>
<input
type="text"
id="registerName"
className="form-control"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</div>
<div className="form-outline mb-4">
<label className="form-label" htmlFor="registerEmail">Email:</label>
<input
type="email"
id="registerEmail"
className="form-control"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>
<div className="form-outline mb-4">
<label className="form-label" htmlFor="registerPassword">Password:</label>
<input
type="password"
id="registerPassword"
className="form-control"
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</div>
<div className="form-outline mb-4">
<label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
<input
type="password"
id="confirmPassword"
className="form-control"
placeholder="Confirm your password"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
/>
</div>
<button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
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
