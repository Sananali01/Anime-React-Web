// AboutUs.js
import React from 'react';
import '../../assets/More.css';




import goku from '../../images/about/goku.jpg';
import naruto from '../../images/about/naruto.jpg';
import luffy from '../../images/about/luffy.jpg';
import ichigo from '../../images/about/ichigo.jpg';
import natsu from '../../images/about/natsu.png';
import erwin from '../../images/about/erwin.jpg';
import sasuke from '../../images/about/sasuke.jpg';
import vegeta from '../../images/about/vegeta.jpg';
import zoro from '../../images/about/zoro.jpg';
import light from '../../images/about/light.png';

const teamMembers = [
    { name: 'Goku', position: 'CEO', photo: goku, color: '#4B0082' },
    { name: 'Naruto', position: 'Lead Developer', photo: naruto, color: '#8B4513' },
    { name: 'Luffy', position: 'Designer', photo: luffy, color: '#2E8B57' },
    { name: 'Ichigo', position: 'Marketing Specialist', photo: ichigo, color: '#800000' },
    { name: 'Natsu', position: 'Social Media Manager', photo: natsu, color: '#B22222' },
    { name: 'Erwin', position: 'Content Creator', photo: erwin, color: '#362e67' },
    { name: 'Sasuke', position: 'Head of Operations', photo: sasuke, color: '#0e486d' },
    { name: 'Vegeta', position: 'Lead Engineer', photo: vegeta, color: '#854900' },
    { name: 'Zoro', position: 'Project Manager', photo: zoro, color: '#028b21' },
    { name: 'Light', position: 'Data Analyst', photo: light, color: '#383d41' },
];

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1>About Us</h1>
                <div className="about-section">
                    <div className="about-text text-white">
                        <p>
                            Welcome to Anime Fusion, your ultimate destination for all things anime! We are a passionate team of anime enthusiasts dedicated to providing you with the best anime experience. Our mission is to create a vibrant community where anime lovers from all over the world can come together to explore, discuss, and celebrate their favorite anime series and movies. At Anime Fusion, you'll find a curated collection of top-rated anime, exclusive content, and exciting events to keep you engaged and entertained. Join us on this epic journey as we delve into the fascinating world of anime and share our love for this incredible art form!
                            Anime Fusion is more than just a website; it's a community of like-minded individuals who share a passion for anime. Whether you're a seasoned otaku or just starting your anime journey, you'll find something to love at Anime Fusion.
                            Our team is dedicated to bringing you the best of the anime world. From in-depth reviews and analysis to the latest news and updates, we've got you covered. Join us and become part of the Anime Fusion family today!

                        </p>
                    </div>
                    <div className="team--container text-white">
                        <h2>Our Vision</h2>
                        <p>Our vision is to become the premier online destination for anime enthusiasts, providing a comprehensive platform for discovering, enjoying, and engaging with anime content.</p>
                        <h2>Our Team</h2>
                        <p>Meet the passionate individuals behind Anime Fusion! Our team is composed of dedicated anime fans with diverse backgrounds and expertise, united by our love for anime and commitment to delivering an exceptional experience to our community.</p>
                        <p>Together, we work tirelessly to curate the best anime content, organize exciting events, and foster a welcoming environment where anime enthusiasts can connect and share their passion.</p>
                    </div>

                </div>

                <h1 className='mt-5 mb-5'>Team Members</h1>

                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index} style={{ backgroundColor: member.color }}>
                            <div className="team-card">
                                <img src={member.photo} alt={member.name} className="team-member-photo" />

                               <h3>{member.name}</h3>
                                <p>{member.position}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    );
}

export default About;
