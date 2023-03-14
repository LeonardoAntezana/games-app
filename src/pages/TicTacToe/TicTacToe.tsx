import { useState, useRef, useMemo } from 'react'
import papelImg from '../../assets/bolsa-de-papel.png'
import piedraImg from '../../assets/piedra.png'
import tijeraImg from '../../assets/tijeras.png'
import questionImg from '../../assets/informacion.png'
import { ImageResponsive, Scoreplayer } from '../../components'
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
  const messaje = useRef<any>(null)

  const winCpu = useMemo(() => {
    if(score.current.cpu === score.current.playerOne){
      return styles.score
    }
    if(score.current.cpu > score.current.playerOne){
      return styles.scoreLoss
    }
    else{
      return styles.scoreWin
    }
  } , [score.current.cpu, score.current.playerOne])

  const randomChoiceCpu = () => IMAGES[Math.floor(Math.random() * IMAGES.length)]

  const handleClickImage = (image:any) => {
    setOptionSelected(image)
    calculateWinner(image)
    setTimeout(()=> {
      setOptionSelected(imageQuestion)
      optionCpu.current = imageQuestion
    }, 2000)
  }

  const calculateWinner = (image : any) => {
      const imageRandom = randomChoiceCpu()
      optionCpu.current = imageRandom
      if(image === imageRandom){
        messaje.current = 'Empate!'
      }
      if(image.name === imageRandom.loserWith){
        messaje.current = 'Sigue asi!'
        score.current.playerOne = score.current.playerOne + 1
      }
      else{
        messaje.current = 'ohoh...'
        score.current.cpu = score.current.cpu + 1
      }
      setTimeout(() => messaje.current = '', 1000)
  }

  return (
    <View bgColor='#252525' className={styles.container}>
      <h1 className={styles.title}>TIC TAC TOE</h1>
      <Scoreplayer className={winCpu}>
        <span className={styles.scoreText}>{score.current.playerOne} ||| {score.current.cpu}</span>
      </Scoreplayer>
      <p className={messaje.current ? styles.messageScore : styles.messageScore__hidden}>{messaje.current}</p>
      <div className={styles.tablero}>
        <Scoreplayer className={styles.playerScore}>
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
        </Scoreplayer>
        <Scoreplayer className={styles.playerScore}>
          <ImageResponsive image={optionCpu.current}/>
          <div className={styles.container__options}>
          {IMAGES.map((image, index) => 
          <ImageResponsive 
          key={index} 
          className={styles.option} 
          image={imageQuestion} 
          />)}
          </div>
        </Scoreplayer>
      </div>
    </View>
  )
}

export default TicTacToe