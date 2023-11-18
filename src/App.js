import { Route , Navigate , Routes , useLocation} from 'react-router-dom';

//component
import AboutMe from './components/main/AboutMe';
import Landing_of_projects from './components/projects/Landing_of_projects';

//animation for tansition
import { AnimatePresence } from "framer-motion";

//styles
import styles from './App.module.css'

//images
import mainBG from './assets/officeBG.jpg'
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <div className={styles.container}>
          <Routes key={location.pathname} location={location}>
            <Route path='projects' element={<Landing_of_projects/>}/>
            <Route path='/' element={<AboutMe/>}/>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
          <img src={mainBG} alt='mainBG' className={styles.mainBG} />
      </div>
      </AnimatePresence>
    </>
  );
}

export default App;
