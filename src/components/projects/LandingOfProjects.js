import React, { useState , useEffect} from 'react';
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
import cross from '../../assets/svg/cross.svg'


const Landing_of_projects = () => {
    // for access to the parent node fo styling
    const [parent, setParent] = useState(null);
    useEffect(() => {
        setParent(document.getElementById("parentNode"));
        }, []);
    // ______________

    // return btn
    const navigate=useNavigate()
    const goBack = (e)=>{
        setTimeout(() => {
            navigate("/");
        }, 500);
        parent.classList.add(`${styles.fadeOut}`);
    }
    //______________

    // show explains
    const [active,setActive]= useState({
        clock:false,
        calculator:false,
        hangman:false,
        todo:false,
        weather:false,
        currency:false,
        LAB:false,
        iranTint:false,
        beautyHeaven:false


    })
    const showExplain = (e)=>{
        e.preventDefault();
        setActive({[e.target.id]:true})
    }
    const close_explain = (e)=>{
    setTimeout(() => {
            setActive({
                clock:false,
                calculator:false,
                hangman:false,
                todo:false,
                weather:false,
                currency:false,
                LAB:false,
                iranTint:false,
                beautyHeaven:false


            })
    }, 500);
        e.target.parentNode.classList.add(styles.fadeOut);
        
    }
    // _______
    
    return (
        <AnimationForTransition>
        <div id="parentNode" className={styles.container}>
            <Link  onClick={goBack} className={styles.return_button}><h4>برگشت</h4></Link>
            <h1>My portfolio includes beginner-level projects that demonstrate my dedication and progress, as well as advanced projects showcasing my creativity as a newcomer</h1>
{/* clock project______________________ */}
                <article className={styles.clock_project}>
                    <Link onClick={showExplain}>
                        <img id='clock' className={`${styles.bounceInDown}${styles.clock_project}`} src={watchLogo} alt="clock_project_logo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>ساعت <br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>
                    {   (active.clock)
                    &&
                    <section className={styles.amature_explain}>
                        <ul >
                            <li>نام پروژه :</li>
                            <li>ساعت </li>
                            <li>زبان و مهارتهای مورد استفاده:</li>
                            <li>HTML , css , JS </li>
                            <li>توضیح:</li>
                            <li>پروژه ای ابتدایی برای تمرین مفهوم های JS که توی اون ساعت هم به صورت آنالوگ هم دیجیتال قابل نمایش هست </li>
                            <li>سطح :</li>
                            <li>مبتدی</li>
                        </ul>
                        <section>
                                <Link 
                                    target='_blank' 
                                    to="https://aliniroomand.github.io/clock-amature/" 
                                    className={styles.go_to_project}>
                                        بریم پروژه رو ببینیم
                                </Link> 
                        </section>
                            <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                    </section>
                    }
                </article>
{/*end ______________ clock project______________________ */}

{/* calculator project______________________ */}
           <article className={styles.calculator_project}>
                    <Link onClick={showExplain} >
                        <img id='calculator' className={`${styles.bounceInDown}${styles.calculator_project}`} src={calculatorLogo} alt="calculator_project_logo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>ماشین حساب<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>
                    {(active.calculator)
                    &&
                    <section className={styles.amature_explain}>
                    <ul >
                        <li>نام پروژه :</li>
                        <li>ماشین حساب </li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML , css , JS </li>
                        <li>توضیح:</li>
                        <li>پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS  <br/></li>
                        <li>سطح :</li>
                        <li>مبتدی</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/calculator-amature/" 
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                        </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                        </section>
                    }
                </article>
{/*end ______________ calculator project______________________ */}

{/* hangman game project______________________ */}
           <article className={styles.hangman_project}>
                    <Link onClick={showExplain} >
                        <img id='hangman' className={`${styles.bounceInDown}${styles.hangman_project}`}  src={hangmanLogo} alt="hangman_project_logo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>مینی گیم هنگ من<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>
                    {(active.hangman)
                    &&
                    <section className={styles.amature_explain}>

                    <ul >
                        <li>نام پروژه :</li>
                        <li>مینی گیم هنگ من</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML , css , JS </li>
                        <li>توضیح:</li>
                        <li> پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS</li>
                        <li>سطح :</li>
                        <li>مبتدی</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/Hangman-mini_game-amature/"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                    </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                    </section>

                    }
                </article>
{/*end ______________ hangman game project______________________ */}

{/* todo app project______________________ */}
           <article className={styles.todoapp_project}>
                    <Link onClick={showExplain}>
                        <img id='todo' className={`${styles.bounceInLeft}${styles.todoapp_project}`} src={todoappLogo} alt="todoappLogo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>لیست کارها<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>
                    {(active.todo)
                    &&
                    <section className={styles.amature_explain}>
                    <ul >
                        <li>نام پروژه :</li>
                        <li>لیست کارها</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML , css , JS </li>
                        <li>توضیح:</li>
                        <li> پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS و همچنین تمرین مواردی مثل localStorage</li>
                        <li>سطح :</li>
                        <li>مبتدی</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/todo-list-Amature-"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                    </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                    </section>
                    }
                </article>
{/*end ______________ todo app project______________________ */}

{/*weather app project______________________ */}
            <article className={styles.weatherapp_project}>
                    <Link onClick={showExplain}>
                        <img id='weather' className={`${styles.bounceInLeft}${styles.weatherapp_project}`} src={weatherapp} alt="weatherappLogo"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>برنامه هواشناسی<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>
                    {(active.weather)
                    &&
                    <section  className={styles.amature_explain}>
                    <ul>
                        <li>نام پروژه :</li>
                        <li>برنامه هواشناسی</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML , css , JS </li>
                        <li>توضیح:</li>
                        <li>
                        پروژه ای مبتدی برای تمرین<br/> مفاهیم JS و CSS و همچنین تمرین مواردی مثل استفاده از API
                        </li>
                        <li>سطح :</li>
                        <li>مبتدی</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/weather-app-amature/"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                        </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                    </section>
                    }
                </article>
{/*end ______________weather app project______________________ */}

{/*digital currency  project______________________ */}
            <article  className={styles.digital_currency_project}>
                    <Link onClick={showExplain} >
                        <img id='currency' className={`${styles.bounceInLeft}${styles.digital_currency_project}`} src={digital_currency} alt="digital_currency"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>مینی صرافی عرض دیجیتال<br/>
                        <span>سطح :</span>
                        <br/>مبتدی<br/>
                    </h4>
                    {(active.currency)
                    &&
                    <section className={styles.amature_explain}>
                    <ul >
                        <li>نام پروژه :</li>
                        <li>مینی صرافی عرض دیجیتال</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML , css , JS ,React JS</li>
                        <li>توضیح:</li>
                        <li>
                        پروژه ای مبتدی برای تمرین مفاهیم JS و CSS و همچنین تمرین مواردی مثل استفاده از API و همچنین فیلتر کردن نتایج بر اساس جستجو بوسیله ریکت و هوک ها
                        </li>
                        <li>سطح :</li>
                        <li>مبتدی</li>
                        <section>
                        <Link 
                            target='_blank' 
                            to="https://mini-digital-currency-exchanger.vercel.app/"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                        </section>
                    </ul>
                    </section>
                    }
                </article>
{/*end ______________digital currency  project______________________ */}

{/*DR-goharnezhad-Lab project______________________ */}
            <article className={styles.LAB}>
                    <Link onClick={showExplain} >
                        <img id='LAB' className={`${styles.bounceInLeft}${styles.LAB_project}`} src={LAB} alt="LAB"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>سایت رسمی آزمایشگاه دکتر گهرنژاد<br/>
                        <span>سطح :</span>
                        <br/>نیمه حرفه ای<br/>
                    </h4>
                    {(active.LAB)
                    &&
                    <section className={styles.midLevel_explain}>
                    <ul>
                        <li>نام پروژه :</li>
                        <li>سایت رسمی دکترگهرنژاد</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML , css , JS ,React JS</li>
                        <li>توضیح:</li>
                        <li className={styles.midLevel_explain_details}>
                        پروژه ای نیمه حرفه ای به سفارش کلاینت برای دریافت جواب آزمایش <br/> !!  این سایت به دلیل عدم استفاده بعضی مسیرها در تمام دستگاه ها،کاملا ریسپانسیو نگردیده !!<br/>
                        </li>
                        <li>سطح :</li>
                        <li>نیمه حرفه ای</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://dr-goharnezhad-lab.vercel.app/"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                    </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                    </section>
                    }
                </article>
{/*end ______________DR-goharnezhad-Lab  project______________________ */}

{/*iranTint project______________________ */}
            <article className={styles.iranTint}>
                    <Link onClick={showExplain}>
                        <img id='iranTint' className={`${styles.bounceInLeft}${styles.iranTint_project}`}  src={iranTint} alt="iranTint"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span><br/>
                        فروشگاه لوازم دیتیلینگ خودرو<br/>
                        <span>سطح :</span>
                        <br/>حرفه ای برای وردپرس<br/>
                    </h4>
                    {(active.iranTint)
                    &&
                    <section className={styles.midLevel_explain}>
                    <ul >
                        <li>نام پروژه :</li>
                        <li>فروشگاه لوازم دیتیلینگ خودرو</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>Wordpress(Elementor)</li>
                        <li>توضیح:</li>
                        <li className={styles.midLevel_explain_details}>
                        این پروژه نمونه کاری برای طراحی سایت با وردپرس هست ولی از آنجایی که این کار نمونه اولیه برای ارائه به کلاینت بود امابه دلیل مشکلاتی که خود کلاینت در محیط کار پیدا کرد از درخواست خود برای طراحی سایت صرفنظر کردو صفحه اصلی سایت طراحی شد و مابقی دست نخورده و sample باقی موند
                        </li>
                        <li>سطح :</li>
                        <li>نیمه حرفه ای</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://dev-irantint.pantheonsite.io/"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                    </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                    </section>
                    }
                </article>
{/*end ______________iranTint project______________________ */}

{/*beauty heaven project______________________ */}
            <article className={styles.beauty_heaven}>
                    <Link onClick={showExplain}>
                        <img id='beautyHeaven' className={`${styles.bounceInLeft}${styles.beauty_heaven}`}  src={beauty_heaven} alt="beauty_heaven"/>
                    </Link>
                    <h4 >
                        <span>نام پروژه :</span>
                        <br/>Beauty Heaven<br/>
                        <span>سطح :</span>
                        <br/>حرفه ای <br/>
                    </h4>
                    {(active.beautyHeaven)
                    &&
                    <section className={styles.midLevel_explain}>
                    <ul >
                        <li>نام پروژه :</li>
                        <li>Beauty Heaven</li>
                        <li>زبان و مهارتهای مورد استفاده:</li>
                        <li>HTML CSS React Redux </li>
                        <li>توضیح:</li>
                        <li className={styles.midLevel_explain_details}>
                        یک نمونه کار حرفه ای با ایده ای از خودم جهت پیدا کردن خدمات پوست و مو وزیبایی<br/> براساس خدمات،نام ارائه دهنده خدمت و یا آدرس و موقعیت ; دارای خدمات جداگانه برای آقایان و خانمها<br/>در این پروژه مبحث های ادمین پنل،سیستم نوبت دهی و مفاهیم ریداکس استفاده می شود
                        </li>
                        <li>سطح :</li>
                        <li>حرفه ای</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://beauty-heaven.vercel.app/"
                            className={styles.go_to_project}>
                                بریم پروژه رو ببینیم
                        </Link> 
                    </section>
                        <img onClick={close_explain} className={styles.close_explain} src={cross} alt='close_btn' />
                        
                    </section>
                    }
                </article>
{/*end ______________beauty heaven______________________ */}


        </div>

        </AnimationForTransition>
    );
};

export default Landing_of_projects;