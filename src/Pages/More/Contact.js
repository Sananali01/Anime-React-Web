import React from 'react';
import '../../assets/More.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub, faYoutube, faPinterest, faTiktok, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (
        <div className="contact-container mt-5">
            <div className="contact-content">
                <div className='col-md-5'>
                    <h1>Contact Us</h1>
                    <div className="contact-info text-white mt-5 mb-5">
                        <p><strong>Email:</strong> contact@animefusion.com</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Address:</strong> 123 Anime Street, Otaku City, AnimeLand</p>
                    </div>
                    <div className="social-media">
                        <h2>Follow Us on Social Media</h2>
                        <ul className="social-icons mt-3">
                            <a className="btn text-white" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <a className="btn text-white" style={{ background: 'linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)', border: 'none' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#333333' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#FF0000' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#E60023' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#FFFC00' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faSnapchat} style={{ color: "#000000" }} />
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#010101', border: '1px solid grey' }} href="#!" role="button">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5 contact-form">
                    <h2>Send us a Message</h2>
                    <form className='text-white mt-4'>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" for="form6Example1">First name</label>
                                    <input type="text" id="form6Example1" className="form-control" placeholder='First Name' />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" for="form6Example2">Last name</label>
                                    <input type="text" id="form6Example2" className="form-control" placeholder='Last Name' />
                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example5">Email</label>
                            <input type="email" id="form6Example5" className="form-control" placeholder='Email' />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example6">Phone</label>
                            <input type="number" id="form6Example6" className="form-control" placeholder='Phone Number' />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" for="form6Example7">Additional information</label>
                            <textarea className="form-control" id="form6Example7" rows="4" placeholder='Write a Message'></textarea>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-4">
                            <label className="form-check-label" htmlFor="form6Example8"> Create an account? </label>
                            &nbsp;&nbsp;&nbsp;
                            <a href="/login" className="ms-2">Register here</a>
                        </div>
                        <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
