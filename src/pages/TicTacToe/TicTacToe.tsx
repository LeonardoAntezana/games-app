import { useState } from 'react'
import papelImg from '../../assets/bolsa-de-papel.png'
import piedraImg from '../../assets/piedra.png'
import tijeraImg from '../../assets/tijeras.png'
import questionImg from '../../assets/informacion.png'
import { ImageResponsive } from '../../components'
import styles from './TicTacToe.module.scss'

const IMAGES  = [
    {name: 'tijera', loserWith: 'piedra', url: tijeraImg},
    {name: 'piedra', loserWith: 'papel', url:piedraImg},
    {name: 'papel', loserWith: 'tijera', url:papelImg},
] 


const TicTacToe = () => {
  const imageQuestion = {name: 'question', loserWith: 'none', url:questionImg}
  const [optionSelected, setOptionSelected] = useState(imageQuestion)
  const [optionCpu, setOptionCpu] = useState(imageQuestion)
  const [score, setScore] = useState({playerOne: 0, cpu: 0})

  const randomChoiceCpu = () => IMAGES[Math.floor(Math.random() * IMAGES.length)]

  const handleClickImage = (image:any) => {
    setOptionSelected(image)
    calculateWinner(image)
    setTimeout(()=> {
      setOptionSelected(imageQuestion)
      setOptionCpu(imageQuestion)
    }, 1000)
  }

  const calculateWinner = (image : any) => {
      const imageRandom = randomChoiceCpu()
      setOptionCpu(imageRandom)
      image.name === imageRandom.loserWith 
        ? setScore(score => ({...score, playerOne: score.playerOne + 1})) 
        : image.name === imageRandom.name ? console.log('empate') 
        : setScore(score => ({...score, cpu: score.cpu + 1}))
  }
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <p>{score.playerOne}||||||||||||||{score.cpu}</p>
      <div className={styles.tablero}>
        <div className={styles.scorePlayer}>
          <div className={styles.container__options}>
          {IMAGES.map((image, index) => 
          <ImageResponsive 
          key={index} 
          className={styles.option}
          image={image} 
          fn={handleClickImage}
          />)}
          </div>
          <ImageResponsive image={optionSelected}/>
        </div>
        <div className={styles.scorePlayer}>
          <ImageResponsive image={optionCpu}/>
          <div className={styles.container__options}>
          {IMAGES.map((image, index) => 
          <ImageResponsive 
          key={index} 
          className={styles.option} 
          image={imageQuestion} 
          />)}
          </div>
        </div>
      </div>
      <div className={styles.container__buttonStart}><button>START GAME</button></div>
    </div>
  )
}

export default TicTacToe