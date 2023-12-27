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
                        <span>: Project's Name</span>
                        <br/>clock <br/>
                        <span>:Level</span>
                        <br/>Beginner<br/>
                    </h4>
                    {   (active.clock)
                    &&
                    <section className={styles.amature_explain}>
                        <ul >
                            <li>: Project's Name</li>
                            <li>clock </li>
                            <li>: Languages</li>
                            <li>HTML , css , JS </li>
                            <li>: Explain</li>
                            <li>A beginner project to practice JS concepts, in which there is a clock that can be displayed in both analog and digital formats</li>
                            <li>:Level</li>
                            <li>Beginner</li>
                        </ul>
                        <section>
                                <Link 
                                    target='_blank' 
                                    to="https://aliniroomand.github.io/clock-amature/" 
                                    className={styles.go_to_project}>
                                        !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Calculator<br/>
                        <span>:Level</span>
                        <br/>Beginner<br/>
                    </h4>
                    {(active.calculator)
                    &&
                    <section className={styles.amature_explain}>
                    <ul >
                        <li>: Project's Name</li>
                        <li>Calculator </li>
                        <li>: Languages</li>
                        <li>HTML , css , JS </li>
                        <li>: Explain</li>
                        <li>A beginner project for practicing JS and CSS concepts</li>
                        <li>:Level</li>
                        <li>Beginner</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/calculator-amature/" 
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Sample and Mini Hangman Game<br/>
                        <span>:Level</span>
                        <br/>Beginner<br/>
                    </h4>
                    {(active.hangman)
                    &&
                    <section className={styles.amature_explain}>

                    <ul >
                        <li>: Project's Name</li>
                        <li>Sample and Mini Hangman Game</li>
                        <li>: Languages</li>
                        <li>HTML , css , JS </li>
                        <li>: Explain</li>
                        <li>A beginner project for practicing JS and CSS concepts</li>
                        <li>:Level</li>
                        <li>Beginner</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/Hangman-mini_game-amature/"
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Todo App<br/>
                        <span>:Level</span>
                        <br/>Beginner<br/>
                    </h4>
                    {(active.todo)
                    &&
                    <section className={styles.amature_explain}>
                    <ul >
                        <li>: Project's Name</li>
                        <li>Todo App</li>
                        <li>: Languages</li>
                        <li>HTML , css , JS </li>
                        <li>: Explain</li>
                        <li>A beginner project for practicing JS and CSS concepts and also practicing some concepts Like LocalStorage</li>
                        <li>:Level</li>
                        <li>Beginner</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/todo-list-Amature-"
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Weather App<br/>
                        <span>:Level</span>
                        <br/>Beginner<br/>
                    </h4>
                    {(active.weather)
                    &&
                    <section  className={styles.amature_explain}>
                    <ul>
                        <li>: Project's Name</li>
                        <li>Weather App</li>
                        <li>: Languages</li>
                        <li>HTML , css , JS </li>
                        <li>: Explain</li>
                        <li>
                        A beginner project for practicing JS and CSS concepts, as well as exercises like using APIs                        </li>
                        <li>:Level</li>
                        <li>Beginner</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://aliniroomand.github.io/weather-app-amature/"
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Mini Digital currency<br/>
                        <span>:Level</span>
                        <br/>Beginner<br/>
                    </h4>
                    {(active.currency)
                    &&
                    <section className={styles.amature_explain}>
                    <ul >
                        <li>: Project's Name</li>
                        <li>Mini Digital currency</li>
                        <li>: Languages</li>
                        <li>HTML , css , JS ,React JS</li>
                        <li>: Explain</li>
                        <li>
                        A beginner project for practicing JS and CSS concepts, as well as exercises like using APIs and filtering results based on search using React and Hooks                        </li>
                        <li>:Level</li>
                        <li>Beginner</li>
                        <section>
                        <Link 
                            target='_blank' 
                            to="https://mini-digital-currency-exchanger.vercel.app/"
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Official site of DR.Goharnezhad LAB<br/>
                        <span>:Level</span>
                        <br/>Mid-Level<br/>
                    </h4>
                    {(active.LAB)
                    &&
                    <section className={styles.midLevel_explain}>
                    <ul>
                        <li>: Project's Name</li>
                        <li>Official site of DR.Goharnezhad LAB</li>
                        <li>: Languages</li>
                        <li>HTML , css , JS ,React JS</li>
                        <li>: Explain</li>
                        <li className={styles.midLevel_explain_details_CarDetailing}>
                        A mid-level project commissioned by the client to receive experiment results. This website is not fully responsive due to some routes not being used on all devices
                        </li>
                        <li>:Level</li>
                        <li>Mid-Level</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://dr-goharnezhad-lab.vercel.app/"
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span><br/>
                        Car Detailing Supplies Store<br/>
                        <span>:Level</span>
                        <br/>semi-pro in the web design with Wordpress<br/>
                    </h4>
                    {(active.iranTint)
                    &&
                    <section className={styles.midLevel_explain}>
                    <ul >
                        <li>: Project's Name</li>
                        <li>Car Detailing Supplies Store</li>
                        <li>: Language</li>
                        <li>Wordpress(Elementor)</li>
                        <li>: Explain</li>
                        <li className={styles.midLevel_explain_details_CarDetailing}>
                        This project is a sample work for website design with WordPress. However, since this work was an initial sample for presentation to the client, due to the issues the client encountered in the working environment, they decided to withdraw their request for website design. As a result, only the homepage of the site was designed and the rest remained untouched as a sample                        </li>
                        <li >:Level</li>
                        <li>semi-pro in Wordpress</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://dev-irantint.pantheonsite.io/"
                            className={styles.go_to_project}>
                                !! Show Me 
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
                        <span>: Project's Name</span>
                        <br/>Beauty Heaven<br/>
                        <span>:Level</span>
                        <br/>Professional<br/>
                    </h4>
                    {(active.beautyHeaven)
                    &&
                    <section className={styles.midLevel_explain}>
                    <ul >
                        <li>: Project's Name</li>
                        <li>Beauty Heaven</li>
                        <li>: Languages</li>
                        <li>HTML CSS React Redux </li>
                        <li>: Explain</li>
                        <li className={styles.midLevel_explain_details_CarDetailing}>
                        A professional sample work with an idea of my own for finding skincare, haircare, and beauty services. It includes services categorized by type, service provider name, or location. It has separate services for both men and women. This project involves topics such as an admin panel, appointment scheduling system, and the use of Redux concepts
                        </li>
                        <li>:Level</li>
                        <li>Professional</li>
                    </ul>
                    <section>
                        <Link 
                            target='_blank' 
                            to="https://beauty-heaven.vercel.app/"
                            className={styles.go_to_project}>
                                !! Show Me 
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