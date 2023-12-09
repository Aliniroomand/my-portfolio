import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

//images
import myPhoto from '../../assets/profile photo .png'
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
            <header>
                <TypeAnimation
                    sequence={[
                        'سلام به دنیای کاری من خوش اومدید',
                        2000, 
                        'سلام به اتاق نمونه کارهای من خوش اومدید',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className={styles.siteTitle}
                    repeat={Infinity}
                />
            </header>
            <section className={styles.main_container}>
                {/* about me part */}
                <section onClick={activing} id="aboutMe" className={styles.aboutMe_container}>
                    <img id="aboutMe" className={styles.aboutMe_Photo} src={myPhoto} alt='myphoto'/>
                    <h1 id="aboutMe" className={styles.aboutMe_title}>درباره من</h1>
                </section>
                { actived.aboutMe &&
                    <section   className={`${styles.main_section_visible} ${styles.fadeIn} `}>
                    <img  className={styles.aboutMe_explain_Photo} src={myPhoto} alt='myphoto'/>
                        <h1 className={styles.aboutMe_explain_name}>علی نیرومند</h1>
                        <section className={styles.aboutMe_explain_container}>
                            <ul className={`${styles.AboutMe_explain_text} ${styles.fadeIn}`}>
                                <li>تخصص <br/>   <span>برنامه نویس فرانت اند</span></li>
                                <li>تاریخ تولد<br/> <span>پنجم اسفند 1373</span></li>
                                <li><SocialMedias/></li>
                            </ul>
                            <ul className={`${styles.AboutMe_explain_text} ${styles.fadeIn}`}>
                                <li>متولد <br/><span>شیراز،ایران</span></li>
                                <li>تحصیلات <br/><span>لیسانس برق الکترونیک</span></li>
                                <li>وجه تمایز <br/><span>خلاقیت </span></li>
                            </ul>
                        </section>
                                <button className={styles.closeAll} onClick={closeAll}>برگشت</button>
                    </section>
                }
                <section onClick={activing} id='abilities' className={styles.abilities_container}>
                    <h1 id='abilities' className={styles.abilities_title}>مهارت ها </h1>
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
                    <h1 id='projects' onClick={activing_projects} className={styles.projects_title}>پروژه ها</h1>
                    <img id='projects' onClick={activing_projects} src={stairs} className={styles.projects_explain} alt='projects' />
                </section>


            </section>
        </section>
        </AnimationForTransition>
        </>
    );
};

export default AboutMe;