import React from 'react';
import { Link } from 'react-router-dom';
//images
import github from '../../assets/github Logo.png'
import Linkedin from "../../assets/linkedin Logo.png"
import whatsapp from "../../assets/whatsApp logo.png"
import instagram from "../../assets/insta Logo.png"
// styles
import styles from "./SocialMedias.module.css"

const SocialMedias = () => {
    return (
        <div className={styles.container}>
            <h5>صفحات اجتماعی من</h5>
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
            </ul>
        </div>
    );
};

export default SocialMedias;