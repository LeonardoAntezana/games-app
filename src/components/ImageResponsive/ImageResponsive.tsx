import styles from './ImageResponsive.module.scss'

interface Props{
    image : any
    fn? : Function,
    className? : string,
}

const ImageResponsive : React.FC<Props> = ({ image,fn, className}) => {
    const {name, url} = image
    return(
        <div className={className} onClick={() => fn && fn(image)}>
            <img className={styles.img__front} src={url} alt={`image-${name}`} />
        </div>
    )
}

export default ImageResponsive;