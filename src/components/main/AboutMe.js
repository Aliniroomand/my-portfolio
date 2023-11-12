import React from 'react';
//images
import myPhoto from '../../assets/profile photo .png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import seo from '../../assets/seo.png'
import wordpress from '../../assets/wordpress.png'

//style
import styles from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <>
            <div className={styles.aboutMe_container}>
                <img className={styles.aboutMe_Photo} src={myPhoto} alt='my photo'/>
                <h1 className={styles.aboutMe_title}>درباره من</h1>
                <ul className={styles.AboutMe_explain}>
                    <li>تخصص :   <span>برنامه نویس فرانت اند</span></li>
                    <li>تاریخ تولد <span>5 اسفند 1373</span></li>
                    <li>متولد:<span>شیراز،ایران</span></li>
                    <li>تحصیلات:<span>لیسانس برق الکترونیک</span></li>
                    <li>وجه تمایز :<span>خلاقیت </span></li>
                </ul>
            </div>
            <div className={styles.abilities_container}>
                <h1 className={styles.abilities_title}>مهارت ها </h1>
                <ul className={styles.abilities_explain}>
                    <li><img src={html} alt='abilities'/></li>
                    <li><img src={css} alt='abilities'/></li>
                    <li><img src={js} alt='abilities'/></li>
                    <li><img src={react} alt='abilities'/></li>
                    <li><img src={redux} alt='abilities'/></li>
                    <li><img src={seo} alt='abilities'/></li>
                    <li><img src={wordpress} alt='abilities'/></li>
                </ul>
            </div>
        </>
    );
};

export default AboutMe;