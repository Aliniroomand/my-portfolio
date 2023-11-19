import { Route , Navigate , Routes , useLocation} from 'react-router-dom';

//component
import AboutMe from './components/main/AboutMe';
import LandingOfProjects from './components/projects/LandingOfProjects';

//animation for tansition
import { AnimatePresence } from "framer-motion";

//styles
import styles from './App.module.css'

//images
import mainBG from './assets/officeBG.jpg'
import projectsBG from './assets/projectsBG.jpg'

function App() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <AnimatePresence mode="wait">
        <div className={styles.container}>
          <Routes key={location.pathname} location={location}>
            <Route path='projects' element={<LandingOfProjects/>}/>
            <Route path='/' element={<AboutMe/>}/>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          {
            (location.pathname === "/")?
          <img id="mainBG"src={mainBG} alt='mainBG' className={`${styles.mainBG}`} />
          :
          <img src={projectsBG} alt='projectsBG' className={`${styles.mainBG2} `}/>
          }
      </div>
      </AnimatePresence>
    </>
  );
}

export default App;
