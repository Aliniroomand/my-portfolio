import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

//images
import myPhoto2 from '../../assets/profile photo 2.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import seo from '../../assets/seo.png'
import wordpress from '../../assets/wordpress.png'
import git_github from "../../assets/Git logo.png"
import stairs from '../../assets/stairs (3).png'

//components
import Abilities from '../../components/main/Abilities';
import SocialMedias from './SocialMedias';

//style
import styles from './AboutMe.module.css'
import { useNavigate } from 'react-router-dom';
import AnimationForTransition from '../AnimationForTransition';

const AboutMe = () => {
    const[actived,setActived]=useState({
        aboutMe:false,
        abilities:false,
    })
    const activing=(e)=>{
        setActived({[(e.target.id).toString()]:true});
    }
    const closeAll=(e)=>{
        if(!e.target.id){
            setTimeout(() => {
                setActived({
                    aboutMe:false,
                    abilities:false,
                })    
            }, 1000);
            
        }
        e.target.parentNode.classList.add(`${styles.fadeOut}`)
    }
    const navigate = useNavigate();
    const activing_projects=(e)=>{
        setTimeout(() => {
            navigate("projects");
        }, 500);
        const parent = document.getElementById("1")
        parent.classList.add(`${styles.slideOutRight}`);
        
        
    }
    
    return (
        <>
        <AnimationForTransition>
            <section id='1' className={styles.container} >
            {/*for banner of site  */}
            <section className={styles.banner_container}>
                <h1 className={styles.siteTitle}>Hi Welcome To</h1>
                <TypeAnimation
                    sequence={[
                        'My World',
                        2000, 
                        'My Portfolio',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className={styles.siteTitle}
                    repeat={Infinity}
                />
            </section>
            <section className={styles.main_container}>
                {/* about me part */}
                <section onClick={activing} id="aboutMe" className={styles.aboutMe_container}>
                    <img id="aboutMe" className={styles.aboutMe_Photo} src={myPhoto2} alt='myphoto'/>
                    <h1 id="aboutMe" className={styles.aboutMe_title}>About Me</h1>
                </section>
                { actived.aboutMe &&
                    <section   className={`${styles.main_section_visible} ${styles.fadeIn} `}>
                    <img  className={styles.aboutMe_explain_Photo} src={myPhoto2} alt='myphoto'/>
                        <h1 className={styles.aboutMe_explain_name}>Ali <br/>Niroomand</h1>
                        <section className={styles.aboutMe_explain_container}>
                            <ul className={`${styles.AboutMe_explain_text} ${styles.fadeIn}`}>
                                <li>EXPERTISE<br/>   <span>Frontend Developer</span></li>
                                <li>Date Of Birth<br/> <span>24 February 1995 </span></li>
                                <li><SocialMedias/></li>
                            </ul>
                            <ul className={`${styles.AboutMe_explain_text} ${styles.fadeIn}`}>
                                <li>BORN IN <br/><span>Shiraz-Iran</span></li>
                                <li>EDUCATION <br/><span>Bachelor of Electrical Engineering</span></li>
                                <li>Distinctive Feature <br/><span>Creativity and Enthusiasm<br/>About Learning</span></li>
                            </ul>
                        </section>
                                <button className={styles.closeAll} onClick={closeAll}>Return</button>
                    </section>
                }
                <section onClick={activing} id='abilities' className={styles.abilities_container}>
                    <h1 id='abilities' className={styles.abilities_title}>Skills </h1>
                    <ul id='abilities' className={styles.abilities_explain}>
                        <li  ><img id='abilities' src={html} alt='abilities'/></li>
                        <li  ><img id='abilities' src={css} alt='abilities'/></li>
                        <li  ><img id='abilities' src={js} alt='abilities'/></li>
                        <li  ><img id='abilities' src={react} alt='abilities'/></li>
                        <li  ><img id='abilities'  src={redux} alt='abilities'/></li>
                        <li  ><img id='abilities' src={seo} alt='abilities'/></li>
                        <li  ><img id='abilities' src={wordpress} alt='abilities'/></li>
                        <li  ><img id='abilities' src={git_github} alt='abilities'/></li>
                    </ul>
                </section>
                { actived.abilities &&
                    <section   className={`${styles.main_section_visible} ${styles.fadeIn}`}>
                        <Abilities/>
                        <button className={styles.closeAll_abilities} onClick={closeAll}>برگشت</button>
                    </section>
                }
                <section onClick={activing_projects} id='projects' className={styles.projects_container}>
                    <h1 id='projects' onClick={activing_projects} className={styles.projects_title}>Projects</h1>
                    <img id='projects' onClick={activing_projects} src={stairs} className={styles.projects_explain} alt='projects' />
                </section>


            </section>
        </section>
        </AnimationForTransition>
        </>
    );
};

export default AboutMe;