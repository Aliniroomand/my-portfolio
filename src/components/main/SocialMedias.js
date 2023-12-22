import React from 'react';
import { Link } from 'react-router-dom';
//images
import github from '../../assets/github Logo.png'
import Linkedin from "../../assets/linkedin Logo.png"
import whatsapp from "../../assets/whatsApp logo.png"
import instagram from "../../assets/insta Logo.png"
import gmail from "../../assets/Gmail_logo.svg"
// styles
import styles from "./SocialMedias.module.css"


// This part Is for sending Mail
const MailtoLink = ({ email, subject, body, children }) => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    return (
      <Link to={mailtoUrl}>{children}</Link>
    );
  };
  
// ______________________



const SocialMedias = () => {
    return (
        <div className={styles.container}>
            <h5>Let's Get In Touch With Me:</h5>
            <ul className={styles.links_container}>
                <li>
                    <Link target='_blank' to="www.linkedin.com/in/ali-niroomand-b5b676246">
                        <img src={Linkedin} alt="LinkedinLogo"/>
                    </Link>
                </li>                
                <li>
                    <Link target='_blank' to="https://github.com/Aliniroomand">
                        <img src={github} alt="LinkedinLogo"/>
                    </Link>
                </li>                
                <li>
                    <Link target='_blank' to="https://instagram.com/ali_nd55?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                        <img src={instagram} alt="LinkedinLogo"/>
                    </Link>
                </li>
                <li>
                    <Link target='_blank' to="https://wa.me/qr/MJKIWMVVAHCAI1">
                        <img src={whatsapp} alt="LinkedinLogo"/>
                    </Link>
                </li>
                <li>
                <MailtoLink email="aliniroomand31@gmail.com" subject="Contact with portfolio" >
                   <img src={gmail} alt='gmail' />
                </MailtoLink>
                </li>
            </ul>
        </div>
    );
};

export default SocialMedias;