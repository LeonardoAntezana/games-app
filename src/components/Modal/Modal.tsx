import styles from './Modal.module.scss'

interface Props {
    title: string,
    setModal : Function,
}

const Modal: React.FC<Props> = ({setModal, title}) => {
  return (
    <div className={styles.container__modal}>
      <div className={styles.modal}>
        <h1 className={styles.modal__title}>{title}</h1>
        <div className={styles.buttons__modal}>
            <button className={styles.btn__modal} onClick={() => setModal()}>Continuar</button>
        </div>
      </div>
    </div>
  )
}

export default Modal