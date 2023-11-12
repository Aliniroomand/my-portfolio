import styles from '../src/App.module.css';
//component
import AboutMe from './components/main/AboutMe';
//images
import mainBG from './assets/officeBG.jpg';

function App() {
  return (
    <div className={styles.container}>
      <img className={styles.mainBG} src={mainBG} alt="mainBG" />
      <AboutMe/>
    </div>
  );
}

export default App;
