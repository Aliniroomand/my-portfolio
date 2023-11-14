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
import stairs from '../../assets/starirs.png'

//style
import styles from './AboutMe.module.css'

const AboutMe = () => {
    const[actived,setActived]=useState({
        aboutMe:false,
        projects:false,
        abilities:false,
    })
    const activing=(e)=>{
        setActived({[(e.target.id).toString()]:true});
    }
    const closeAll=(e)=>{
        if(!e.target.id){
            setActived({
                aboutMe:false,
                projects:false,
                abilities:false,
            })
            console.log(actived);
        }}
    return (
        <>
            <section >
            {/*for banner of site  */}
            <header>
                <TypeAnimation
                    sequence={[
                        'سلام به دنیای کاری من خوش اومدید',
                        2000, 
                        'سلام به اتاق رزومه من خوش اومدید',
                        2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className={styles.siteTitle}
                    repeat={Infinity}
                />
            </header>
            <section>
                <section onClick={activing} id="aboutMe" className={styles.aboutMe_container}>
                    <img id="aboutMe" className={styles.aboutMe_Photo} src={myPhoto} alt='myphoto'/>
                    <h1 id="aboutMe" className={styles.aboutMe_title}>درباره من</h1>
                </section>
                    { actived.aboutMe &&
                    <section  onEnded={styles.fadeOut} className={`${styles.main_section_visible} ${styles.fadeIn} `}>
                    <img onEnded={styles.fadeOut} className={styles.aboutMe_explain_Photo} src={myPhoto} alt='myphoto'/>
                        <ul className={`${styles.AboutMe_explain_text} ${styles.zoomIn}`}>
                            <li>تخصص :   <span>برنامه نویس فرانت اند</span></li>
                            <li>تاریخ تولد <span>5 اسفند 1373</span></li>
                            <li>متولد:<span>شیراز،ایران</span></li>
                            <li>تحصیلات:<span>لیسانس برق الکترونیک</span></li>
                            <li>وجه تمایز :<span>خلاقیت </span></li>
                        </ul>
                            <button onClick={closeAll}>sssssssss</button>
                    </section>
                    }
                <section onClick={activing} id='abilities' className={styles.abilities_container}>
                    <h1 id='abilities' className={styles.abilities_title}>مهارت ها </h1>
                    <ul id='abilities' className={styles.abilities_explain}>
                        <li><img src={html} alt='abilities'/></li>
                        <li><img src={css} alt='abilities'/></li>
                        <li><img src={js} alt='abilities'/></li>
                        <li><img src={react} alt='abilities'/></li>
                        <li><img src={redux} alt='abilities'/></li>
                        <li><img src={seo} alt='abilities'/></li>
                        <li><img src={wordpress} alt='abilities'/></li>
                    </ul>
                </section>
                    { actived.abilities &&
                    <section   className={styles.main_section_visible}>
                            <button onClick={closeAll}>sssssssss</button>
                    </section>
                    }
                <section onClick={activing} id='projects' className={styles.projects_container}>
                    <h1 id='projects' className={styles.projects_title}>پروژه ها</h1>
                    <img id='projects' src={stairs} className={styles.projects_explain} alt='projects' />
                </section>
                    { actived.projects &&
                    <section   className={styles.main_section_visible}>
                            <button onClick={closeAll}>sssssssss</button>
                    </section>
                    }

            </section>
        </section>
        </>
    );
};

export default AboutMe;