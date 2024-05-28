import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../assets/More.css';

const FaqPage = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="faq-title"><FontAwesomeIcon icon={faQuestionCircle} /> Frequently Asked Questions</h1>
        <p className="faq-subtitle text-white">Your questions answered! If you don't find what you're looking for, feel free to contact us.</p>
      </div>
      
      <div className="faq-content">
        <Accordion title="General Questions">
          <AccordionItem title="What is Anime Fusion?">
            Anime Fusion is your go-to platform for everything anime. From the latest news and reviews to an extensive database of anime titles, we've got it all!
          </AccordionItem>
          <AccordionItem title="How do I create an account?">
            Creating an account is easy! Just click on the "Register" button on the top right corner of the homepage and fill out the registration form.
          </AccordionItem>
        </Accordion>

        <Accordion title="Subscription and Pricing">
          <AccordionItem title="What are the subscription plans?">
            We offer a variety of subscription plans to fit your needs, including monthly, quarterly, and annual plans. Each plan offers different levels of access and benefits.
          </AccordionItem>
          <AccordionItem title="How do I cancel my subscription?">
            You can cancel your subscription at any time by going to your account settings and selecting "Cancel Subscription". If you have any issues, feel free to contact our support team.
          </AccordionItem>
        </Accordion>

        <Accordion title="Content and Features">
          <AccordionItem title="Can I download anime episodes?">
            Yes, our premium members can download episodes to watch offline. Simply click the download button on the episode page.
          </AccordionItem>
          <AccordionItem title="How do I request a new anime to be added?">
            You can request new anime titles by visiting our "Request Anime" page and filling out the request form. We review all requests and do our best to add popular suggestions.
          </AccordionItem>
          <AccordionItem title="Is there a mobile app available?">
            Yes, we have a mobile app available for both Android and iOS devices. You can download it from the Google Play Store or the Apple App Store.
          </AccordionItem>
        </Accordion>

        <Accordion title="Technical Support">
          <AccordionItem title="I'm experiencing technical issues with the website. What should I do?">
            If you encounter any technical issues while using our website, please try clearing your browser cache and cookies, and then reload the page. If the problem persists, feel free to contact our technical support team for assistance.
          </AccordionItem>
          <AccordionItem title="How do I reset my password?">
            You can reset your password by clicking on the "Forgot Password" link on the login page. Follow the instructions provided to reset your password.
          </AccordionItem>
        </Accordion>

        <Accordion title="Account Management">
          <AccordionItem title="How can I update my profile information?">
            You can update your profile information by navigating to your account settings. From there, you can edit your personal details, change your password, and manage your preferences.
          </AccordionItem>
          <AccordionItem title="Can I change my username?">
            Currently, we do not support the ability to change your username. However, if you have a specific reason for needing to change it, please contact our support team, and we'll do our best to assist you.
          </AccordionItem>
        </Accordion>

        <Accordion title="Community Guidelines">
          <AccordionItem title="What are the rules for interacting in the community forums?">
            Our community forums have specific guidelines to ensure a positive and respectful environment for all members. Please review the community guidelines before participating in discussions to avoid any violations.
          </AccordionItem>
        </Accordion>

        <Accordion title="Privacy and Security">
          <AccordionItem title="How is my personal information protected?">
            We take the privacy and security of your personal information seriously. We employ industry-standard security measures to safeguard your data and adhere to strict privacy policies.
          </AccordionItem>
          <AccordionItem title="Can I delete my account and data?">
            Yes, you have the option to delete your account and associated data at any time. Please note that this action is irreversible and will permanently remove all your information from our platform.
          </AccordionItem>
        </Accordion>
      </div>

      <div className="faq-contact">
        <h2 className="faq-contact-title">Still Have Questions?</h2>
        <p className="faq-contact-text">If you can't find the answer you're looking for, feel free to <a href="/contact">contact us</a>.</p>
      </div>

      <div className="faq-social-media">
        <h2 className="faq-social-title">Follow Us</h2>
        <div className="faq-social-icons">
          <a className="faq-social-icon" href="#!"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a className="faq-social-icon" href="#!"><FontAwesomeIcon icon={faTwitter} /></a>
          <a className="faq-social-icon" href="#!"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </div>
  );
}

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-section">
      <h2 className={`faq-section-title ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        {title} 
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className='float-right'/>
      </h2>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const AccordionItem = ({ title, children }) => {
  return (
    <div className="faq-item">
      <h3 className="faq-question">{title}</h3>
      <p className="faq-answer">{children}</p>
    </div>
  );
};

export default FaqPage;
