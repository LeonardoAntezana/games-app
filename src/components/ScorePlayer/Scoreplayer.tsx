import { ReactNode } from "react";
import styles from './ScorePlayer.module.scss'

interface Props{
    children: ReactNode,
    className?: string,
}

const ScorePlayer : React.FC<Props> = ({children, className}) => {
    return(
        <div className={`${styles.scorePlayer} ${className}`}>
            {children}
        </div>
    )
}  

export default ScorePlayer;