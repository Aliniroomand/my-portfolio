import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//animation for tansition
import AnimationForTransition from '../AnimationForTransition';
//styles
import styles from './LandingOfProjects.module.css'
//images
import watchLogo from "../../assets/projects Logo/clock.png"
import calculatorLogo from "../../assets/projects Logo/calculator.png"
import hangmanLogo from "../../assets/projects Logo/HangmanLogo.png"
import todoappLogo from "../../assets/projects Logo/todoappLogo.png"
import weatherapp from "../../assets/projects Logo/wweather (1).png"
import digital_currency from "../../assets/projects Logo/digital_currency.png"
import LAB from "../../assets/projects Logo/LAB.png"
import iranTint from "../../assets/projects Logo/iranTint.png"
import beauty_heaven from '../../assets/projects Logo/beauty-heaven.png'


const Landing_of_projects = () => {
    const navigate=useNavigate()
    const goBack = (e)=>{
        setTimeout(() => {
            navigate("/");
        }, 500);
        const parent = document.getElementById("parentNode")
        parent.classList.add(`${styles.fadeOut}`);
        
    }

    return (
        <AnimationForTransition>
        <div id="parentNode" className={styles.container}>
            <Link onClick={goBack} className={styles.return_button}><h4>برگشت</h4></Link>
            <h1>بعضی از پروژه ها بسیار مبتدی هستند ولی وجود پروژه های مبتدی باعث می شه میزان پیشرفتم که نشات گرفته از علاقه وپیگیری خودم هست رو بهتر نشون بده... و پروژه های حرفه ای تر نشون دهنده خلاقیت در عین تازه کار بودنم هست</h1>
            {/* clock project______________________ */}
                <article className={styles.clock_project}>
                    <Link target='_blank' to="https://aliniroomand.github.io/clock-amature/">
                        <img className={`${styles.bounceInDown}${styles.clock_project}`} src={watchLogo} alt="clock_project_logo"/>
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
                        <img className={`${styles.bounceInDown}${styles.calculator_project}`} src={calculatorLogo} alt="calculator_project_logo"/>
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
                        <img className={`${styles.bounceInDown}${styles.hangman_project}`}  src={hangmanLogo} alt="hangman_project_logo"/>
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
                        <img className={`${styles.bounceInLeft}${styles.todoapp_project}`} src={todoappLogo} alt="todoappLogo"/>
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
                        <img className={`${styles.bounceInLeft}${styles.weatherapp_project}`} src={weatherapp} alt="weatherappLogo"/>
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
                        <img className={`${styles.bounceInLeft}${styles.digital_currency_project}`} src={digital_currency} alt="digital_currency"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>مینی صرافی عرض دیجیتال<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS ,React JS<br/>
                        <span>توضیح:</span><br/>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS و همچنین تمرین مواردی مثل استفاده از API و همچنین فیلتر کردن نتایج بر اساس جستجو<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>

                </article>
            {/*end ______________digital currency  project______________________ */}

            {/*DR-goharnezhad-Lab project______________________ */}
            <article className={styles.LAB}>
                    <Link target='_blank' to="https://dr-goharnezhad-lab.vercel.app/">
                        <img className={`${styles.bounceInLeft}${styles.LAB_project}`} src={LAB} alt="LAB"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>سایت رسمی آزمایشگاه دکتر گهرنژاد<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        HTML , css , JS , React JS <br/>
                        <span>توضیح:</span><br/>
                        پروژه ای نیمه حرفه ای به سفارش کلاینت <br/>برای دریافت جواب آزمایش <br/> !!  این سایت به دلیل عدم استفاده بعضی مسیرها در تمام دستگاه ها،<br/>کاملا ریسپانسیو نگردیده <br/>
                        <span>سطح :</span>
                        <br/>نیمه حرفه ای<br/>
                    </h4>

                </article>
            {/*end ______________DR-goharnezhad-Lab  project______________________ */}

            {/*iranTint project______________________ */}
            <article className={styles.iranTint}>
                    <Link target='_blank' to="https://dev-irantint.pantheonsite.io/">
                        <img className={`${styles.bounceInLeft}${styles.iranTint_project}`}  src={iranTint} alt="iranTint"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>فروشگاه لوازم دیتیلینگ خودرو<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        Wordpress(Elementor)<br/>
                        <article><span>توضیح:</span><br/>
                        این پروژه نمونه کاری برای طراحی سایت با وردپرس هست ولی <br/>از آنجایی که این کار نمونه اولیه برای ارائه به کلاینت بود اما<br/>به دلیل مشکلاتی که خود کلاینت در محیط کار پیدا کرد <br/>از درخواست خود برای طراحی سایت صرفنظر کرد<br/>و صفحه اصلی سایت طراحی شد و مابقی دست نخورده و sample باقی موند<br/>
                        </article>
                        <span>سطح :</span>
                        <br/>حرفه ای برای وردپرس<br/>
                    </h4>

                </article>
            {/*end ______________iranTint project______________________ */}

            {/*beauty heaven project______________________ */}
            <article className={styles.beauty_heaven}>
                    <Link target='_blank' to="https://beauty-heaven.vercel.app/">
                        <img className={`${styles.bounceInLeft}${styles.beauty_heaven}`}  src={beauty_heaven} alt="beauty_heaven"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>Beauty Heaven<br/>
                        <span>زبان و مهارتهای مورد استفاده:</span><br/>
                        React Redux Css <br/>
                        <article><span>توضیح:</span><br/>
                        یک نمونه کار حرفه ای با ایده ای از خودم جهت پیدا کردن خدمات پوست و مو وزیبایی براساس <br/>خدمات،نام ارائه دهنده خدمت و یا آدرس و موقعیت<br/>دارای خدمات جداگانه برای آقایان و خانمها<br/>در این پروژه مبحث های ادمین پنل،سیستم نوبت دهی و مفاهیم ریداکس استفاده شده<br/>
                        </article>
                        <span>سطح :</span>
                        <br/>حرفه ای <br/>
                    </h4>

                </article>
            {/*end ______________beauty heaven______________________ */}


        </div>

        </AnimationForTransition>
    );
};

export default Landing_of_projects;