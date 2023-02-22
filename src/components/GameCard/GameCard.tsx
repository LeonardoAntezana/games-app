import { Link } from "react-router-dom"
import styles from './GameCard.module.scss'

interface Props{
    title: string
    url: string
}

const GameCard : React.FC<Props> = ({title, url}) => {
    return (
      <Link to={`/${title.toLowerCase().replaceAll('-', '')}`} className={styles.gameCard}>
        <h2 className={styles.gameCard__title}>{title}</h2>
        <div className={styles.container__image} style={{backgroundImage: `url(${url})`}}></div>
      </Link>
    )
}


export default GameCard