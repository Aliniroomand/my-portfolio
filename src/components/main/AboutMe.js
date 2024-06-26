import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

//images
import myPhoto2 from '../../assets/profile photo 2.png'
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/javascript.png'
import react from '../../assets/skills/react.png'
import redux from '../../assets/skills/redux.png'
import seo from '../../assets/skills/seo.png'
import wordpress from '../../assets/skills/wordpress.png'
import git_github from "../../assets/skills/Git logo.png"
import stairs from '../../assets/backgrounds/stairs.jpg'

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
                <h1 className={styles.siteTitle}>Hi Welcome To My</h1>
                <TypeAnimation
                    sequence={[
                        'World',
                        2000, 
                        'Portfolio',
                        2000,
                    ]}
                    wrapper="h1"
                    speed={50}
                    className={styles.siteTitle}
                    repeat={Infinity}
                />
            </section>
{/* end of banner ________ */}
{/* container of Infos  */}
            <section className={styles.main_container}>
{/* about me part */}
                <section onClick={activing} id="aboutMe" className={styles.aboutMe_container}>
                    <img id="aboutMe" className={styles.aboutMe_Photo} src={myPhoto2} alt='myphoto'/>
                    <h1 id="aboutMe" className={styles.aboutMe_title}>About Me</h1>
                </section>
{/*__________end of about me part */}
{/* skills part */}
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
{/*________end of skills part */}
{/* projects part */}
                <section onClick={activing_projects} id='projects' className={styles.projects_container}>
                    <h1 id='projects' onClick={activing_projects} className={styles.projects_title}>Projects</h1>
                    <img id='projects' onClick={activing_projects} src={stairs} className={styles.projects_explain} alt='projects' />
                </section>
{/*______end of projects part */}
{/* Explains part */}
            <section className={styles.explain_container}>
                { actived.aboutMe &&
                    <section   className={`${styles.main_section_visible} ${styles.fadeIn} `}>
                    <img  className={styles.aboutMe_explain_Photo} src={myPhoto2} alt='myphoto'/>
                        <h1 className={styles.aboutMe_explain_name}>Ali <br/>Niroomand</h1>
                            <ul className={`${styles.AboutMe_explain_text_left} ${styles.fadeIn}`}>
                                <li>EXPERTISE<br/>   <span>Frontend Developer</span></li>
                                <li>Distinctive Feature <br/><span>Creativity and Enthusiasm<br/>About Learning</span></li>
                                <li><SocialMedias/></li>
                            </ul>
                            <ul className={`${styles.AboutMe_explain_text_right} ${styles.fadeIn}`}>
                                <li>BORN IN <br/><span>Shiraz-Iran</span></li>
                                <li>EDUCATION <br/><span>Bachelor of Electrical Engineering</span></li>
                                <li>Date Of Birth<br/> <span>24 February 1995 </span></li>

                            </ul>
                                <button className={styles.closeAll} onClick={closeAll}>Return</button>
                    </section>
                }
                { actived.abilities &&
                    <section   className={`${styles.abilities_explain_container} ${styles.fadeIn}`}>
                        <Abilities closeAll={closeAll}/>
                    </section>
                }
            </section>
{/*______ end of explain parts__________ */}
            </section>
{/*________end of container of Infos_______  */}
        </section>
        </AnimationForTransition>
        </>
    );
};

export default AboutMe;