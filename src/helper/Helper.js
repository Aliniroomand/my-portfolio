// for animated counting
import { useSpring , animated } from 'react-spring';
import styles from "../components/main/Abilities.module.css"
export const Number = ({n})=>{
const{number}= useSpring({
    from:{number :0},
    number:n,
    delay:800,
    config:{ mass: 1 , tension: 20 , friction :10},
});
return <animated.div className={styles.numbers}>{number.to((n)=>`${n.toFixed(0)} %`) }</animated.div>
}