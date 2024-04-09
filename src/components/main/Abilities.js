import React from 'react';
//styles
import styles from './Abilities.module.css'
//images
import html from '../../assets/skills/html.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/javascript.png'
import react from '../../assets/skills/react.png'
import redux from '../../assets/skills/redux.png'
import typeScript from '../../assets/skills/typeScript Logo.png'
import wordpress from '../../assets/skills/wordpress.png'
import git_github from "../../assets/skills/Git logo.png"
import tailwind from "../../assets/skills/tailwind-logo.svg"
import GraphQL from "../../assets/skills/GraphQL Logo.png"
import RestAPI from "../../assets/skills/RestAPI Logo.png"
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
                <img src={typeScript} alt='abilities'/>
                <Number n={50}/>
                <h3>typeScript</h3>
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
            <section className={`${styles.Images_container}`}>
                <img src={tailwind} alt='tailwind'/>
                <Number n={75}/>
                <h3>tailwind</h3>
            </section>
            <section className={`${styles.Images_container}`}>
                <img src={GraphQL} alt='GraphQL'/>
                <Number n={80}/>
                <h3>GraphQL</h3>
            </section>
            <section className={`${styles.Images_container}`}>
                <img src={RestAPI} alt='RestAPI'/>
                <Number n={80}/>
                <h3>RestAPI</h3>
            </section>
        </section>
        <button className={styles.closeAll_abilities} onClick={closeAll}>Return</button>
    </section>
        
        );
};

export default Abilities;