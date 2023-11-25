import React from 'react';
import { Link } from 'react-router-dom';
//animation for tansition
import AnimationForTransition from '../AnimationForTransition';
//styles
import styles from './LandingOfProjects.module.css'
//images
import stairs from '../../assets/stairs (3).png'
import watchLogo from "../../assets/projects Logo/clock.png"
import calculatorLogo from "../../assets/projects Logo/calculator.png"
import hangmanLogo from "../../assets/projects Logo/HangmanLogo.png"
import todoappLogo from "../../assets/projects Logo/todoappLogo.png"
import weatherapp from "../../assets/projects Logo/wweather (1).png"
import digital_currency from "../../assets/projects Logo/digital_currency.png"

const Landing_of_projects = () => {
    return (
        <AnimationForTransition>
        <div className={styles.container}>
            <h1>بعضی از پروژه ها بسیار مبتدی هستند<br/> ولی وجود پروژه های مبتدی باعث می شه میزان پیشرفتم<br/> که نشات گرفته از علاقه وپیگیری خودم هست رو بهتر نشون بده... <br/>و پروژه های حرفه ای تر <br/>نشون دهنده خلاقیت در عین تازه کار بودنم هست</h1>
            <img className={styles.stairs}  src={stairs} alt='stairs'/>
            {/* clock project______________________ */}
                <article className={styles.clock_project}>
                    <Link target='_blank' to="https://aliniroomand.github.io/clock-amature/">
                        <img  src={watchLogo} alt="clock_project_logo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>ساعت <br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای ابتدایی برای تمرین مفهوم های JS که توی اون ساعت هم به صورت آنالوگ هم دیجیتال قابل نمایش هست <br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________ clock project______________________ */}

           {/* calculator project______________________ */}
           <article className={styles.calculator_project}>
                    <Link target='_blank' to="https://aliniroomand.github.io/calculator-amature/">
                        <img  src={calculatorLogo} alt="calculator_project_logo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>ماشین حساب<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS  <br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________ calculator project______________________ */}
           {/* hangman game project______________________ */}
           <article className={styles.hangman_project}>
                    <Link target='_blank' to="https://aliniroomand.github.io/Hangman-mini_game-amature/">
                        <img  src={hangmanLogo} alt="hangman_project_logo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>مین گیم هنگ من<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS  <br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________ hangman game project______________________ */}

            {/* todo app project______________________ */}
           <article className={styles.todoapp_project}>
                    <Link target='_blank' to="https://aliniroomand.github.io/todo-list-Amature-">
                        <img  src={todoappLogo} alt="todoappLogo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>لیست کارها<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS و همچنین تمرین مواردی مثل localStorage<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________ todo app project______________________ */}

            {/*weather app project______________________ */}
            <article className={styles.weatherapp_project}>
                    <Link target='_blank' to="https://aliniroomand.github.io/weather-app-amature/">
                        <img  src={weatherapp} alt="weatherappLogo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>برنامه هواشناسی<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS و همچنین تمرین مواردی مثل استفاده از API<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________weather app project______________________ */}

            {/*digital currency  project______________________ */}
            <article className={styles.digital_currency_project}>
                    <Link target='_blank' to="https://mini-digital-currency-exchanger.vercel.app/">
                        <img  src={digital_currency} alt="digital_currency"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>مینی صرافی عرض دیجیتال<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS و همچنین تمرین مواردی مثل استفاده از API و همچنین فیلتر کردن نتایج بر اساس جستجو<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________digital currency  project______________________ */}



        </div>

        </AnimationForTransition>
    );
};

export default Landing_of_projects;