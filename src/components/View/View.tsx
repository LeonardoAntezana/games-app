import { ReactNode } from "react";
import styles from './View.module.scss'

interface Props{
    children: ReactNode,
    className?: string,
    bgColor?: string
}

const View : React.FC<Props> = ({children, className, bgColor}) => {
    const isName = className ? className : '' 
    return(
        <div style={{backgroundColor: `${bgColor}`}} className={styles.view}>
            <div className={`${styles.container} ${isName}`}>
                {children}
            </div>
        </div>
    )
}  

export default View;