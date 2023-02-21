import { useEffect, useState } from 'react'
import { ImageCard } from "../../models/image.type";
import Modal from '../../components/Modal/Modal';
import styles from './MemoTest.module.scss'

const IMAGES : ImageCard[] = [
    {id: 1, url: 'https://cdn-icons-png.flaticon.com/512/3069/3069172.png'},
    {id: 2, url: 'https://cdn-icons-png.flaticon.com/512/2153/2153090.png'},
    {id: 3, url: 'https://cdn-icons-png.flaticon.com/512/3195/3195966.png'},
    {id: 4, url: 'https://cdn-icons-png.flaticon.com/512/257/257504.png'},
    {id: 5, url: 'https://cdn-icons-png.flaticon.com/512/2711/2711858.png'},
    {id: 6, url: 'https://cdn-icons-png.flaticon.com/128/3196/3196011.png'},
    {id: 7, url: 'https://cdn-icons-png.flaticon.com/512/1998/1998610.png'},
    {id: 8, url: 'https://cdn-icons-png.flaticon.com/512/1998/1998713.png'},
    {id: 9, url: 'https://cdn-icons-png.flaticon.com/512/809/809052.png'},
    {id: 10, url: 'https://cdn-icons-png.flaticon.com/512/2632/2632839.png'},
    ].flatMap(img => [img, {id: img.id + 10, url: img.url}]).sort(() => Math.random() - 0.5)

const MemoTest = () => {
  const [couples, setCouples] = useState<ImageCard[]>([])
  const [cardsSelected, setCardsSelected] = useState<ImageCard[]>([])
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleClick = () => {
    location.reload()
    setModalVisible(false)
  }

  useEffect(() => {
    if(cardsSelected.length === 2){
      if(cardsSelected[0].url === cardsSelected[1].url){
        setCouples([...couples, ...cardsSelected])
        setCardsSelected([])
      }
      else{
        setTimeout(() => setCardsSelected([]), 300)
      }
    }
  }, [cardsSelected])

  const inList = (image: ImageCard) => couples.includes(image) || cardsSelected.includes(image)

  const cardSelected = (image: ImageCard) => setCardsSelected(cards => ([...cards, image]))

  useEffect(() => {
    if(couples.length === IMAGES.length){
      setModalVisible(true)
    }
  }, [couples])
      return(
        <div className={styles.memoTest}>
          {IMAGES.map(image =>
            <div onClick={() => cardSelected(image)} className={inList(image) ? styles.conteiner__image : styles.conteiner__image__back} key={image.id}>
              <img className={styles.img__front} src={image.url}/>
            </div>)}
          {modalVisible && <Modal title='Ganaste!' setModal={handleClick}/>}
        </div>
      )
    }

    export default MemoTest;