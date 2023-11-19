import React from 'react';
import { Link } from 'react-router-dom';
//animation for tansition
import AnimationForTransition from '../AnimationForTransition';
//styles
import styles from './LandingOfProjects.module.css'
//images
import stairs from '../../assets/stairs (3).png'
import watchLogo from "../../assets/projects Logo/clock.png"
const Landing_of_projects = () => {
    return (
        <AnimationForTransition>
        <div className={styles.container}>
            <img className={styles.stairs}  src={stairs} alt='stairs'/>
            <Link target='_blank' to="https://aliniroomand.github.io/clock-amature/">
                <img className={styles.clock_project} src={watchLogo} alt="clock_project_logo"/>
            </Link>
        </div>

        </AnimationForTransition>
    );
};

export default Landing_of_projects;