import styles from './Button.module.css';

const Button = (props) => {
    const classes = `${props.className} ${styles.button}`

    return <button className={classes}>{props.children}</button>
}

export default Button;