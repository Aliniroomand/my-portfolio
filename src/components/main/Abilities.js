import React from 'react';
//styles
import styles from './Abilities.module.css'
//images
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import seo from '../../assets/seo.png'
import wordpress from '../../assets/wordpress.png'
import git_github from "../../assets/Git logo.png"
import Bootstrap from "../../assets/Bootstrap_logo.png"
//helper
import { Number } from '../../helper/Helper';


const Abilities = ({closeAll}) => {
    return (
    <section className={styles.container}>
            <h1 className={styles.title_container}>
            I have gained expertise in these fields <u>until now</u> ...
            </h1>
        <section className={styles.main_boxes_container}>
            <section className={styles.Images_container}>
                <img src={html} alt='abilities'/>
                <Number n={94}/>
                <h3>HTML</h3>

            </section>
            <section className={styles.Images_container} >
                <img src={css} alt='abilities'/>
                <Number n={97}/>
                <h3>CSS</h3>
            </section>            
            <section className={styles.Images_container}>
                <img src={js} alt='abilities'/>
                <Number n={85}/>
                <h3>Javascript</h3>
            </section>            
            <section className={styles.Images_container}>
                <img src={react} alt='abilities'/>
                <Number n={75}/>
                <h3>React JS</h3>
            </section>            
            <section className={styles.Images_container}>
                <img src={redux} alt='abilities'/>
                <Number n={50}/>
                <h3>Redux</h3>
            </section>            
            <section className={styles.Images_container}>
                <img src={seo} alt='abilities'/>
                <Number n={20}/>
                <h3>SEO</h3>
            </section>            
            <section className={styles.Images_container}>
                <img src={wordpress} alt='abilities'/>
                <Number n={95}/>
                <h3>Wordpress</h3>
            </section>  
            <section className={`${styles.Images_container} ${styles.github_container}`}>
                <img src={git_github} alt='abilities'/>
                <Number n={90}/>
                <h3>Git and Github</h3>
            </section>
            <section className={`${styles.Images_container} ${styles.github_container}`}>
                <img src={Bootstrap} alt='Bootstrap'/>
                <h4>Coming Soon ... </h4>
                <h3>Bootstrap</h3>
            </section>
        </section>
        <button className={styles.closeAll_abilities} onClick={closeAll}>Return</button>
    </section>
        
        );
};

export default Abilities;