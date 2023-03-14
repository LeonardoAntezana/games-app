import { useState, useRef } from 'react'
import papelImg from '../../assets/bolsa-de-papel.png'
import piedraImg from '../../assets/piedra.png'
import tijeraImg from '../../assets/tijeras.png'
import questionImg from '../../assets/informacion.png'
import { ImageResponsive } from '../../components'
import ScorePlayer from '../../components/ScorePlayer/Scoreplayer'
import View from '../../components/View/View'
import styles from './TicTacToe.module.scss'

const IMAGES  = [
    {name: 'tijera', loserWith: 'piedra', url: tijeraImg},
    {name: 'piedra', loserWith: 'papel', url:piedraImg},
    {name: 'papel', loserWith: 'tijera', url:papelImg},
] 


const TicTacToe = () => {
  const imageQuestion = {name: 'question', loserWith: 'none', url:questionImg}
  const [optionSelected, setOptionSelected] = useState(imageQuestion)
  const optionCpu = useRef(imageQuestion)
  const score = useRef({playerOne: 0, cpu: 0})

  const randomChoiceCpu = () => IMAGES[Math.floor(Math.random() * IMAGES.length)]

  const handleClickImage = (image:any) => {
    setOptionSelected(image)
    calculateWinner(image)
    setTimeout(()=> {
      setOptionSelected(imageQuestion)
      optionCpu.current = imageQuestion
    }, 1000)
  }

  const calculateWinner = (image : any) => {
      const imageRandom = randomChoiceCpu()
      optionCpu.current = imageRandom
      image.name === imageRandom.loserWith 
        ? score.current.playerOne = score.current.playerOne + 1  
        : image.name === imageRandom.name ? console.log('empate') 
        : score.current.cpu = score.current.cpu + 1
  }
  return (
    <View bgColor='#252525' className={styles.container}>
      <h1 className={styles.title}>TIC TAC TOE</h1>
      <ScorePlayer className={styles.score}>
        <span className={styles.scoreText}>{score.current.playerOne} ||| {score.current.cpu}</span>
      </ScorePlayer>
      <div className={styles.tablero}>
        <ScorePlayer className={styles.playerScore}>
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
        </ScorePlayer>
        <ScorePlayer className={styles.playerScore}>
          <ImageResponsive image={optionCpu.current}/>
          <div className={styles.container__options}>
          {IMAGES.map((image, index) => 
          <ImageResponsive 
          key={index} 
          className={styles.option} 
          image={imageQuestion} 
          />)}
          </div>
        </ScorePlayer>
      </div>
    </View>
  )
}

export default TicTacToe