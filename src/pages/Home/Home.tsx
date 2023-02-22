import GameCard from "../../components/GameCard/GameCard";
import imageMemo from '../../assets/memotest.png'
import imageTic from '../../assets/ticTacToe.png'
import styles from './Home.module.scss'

const GAMES = [
    {title: 'memotest', url: imageMemo},
    {title: 'tic-Tac-Toe', url: imageTic},
]

const Home = () => {
    return(
        <div className={styles.container__games}>
            {GAMES.map((game,index) => <GameCard key={index} title={game.title} url={game.url}/>)}
        </div>
    )
}

export default Home;