import styles from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = () => {
    const { notification } = useSelector(state => state.ui)
    const { status, result, message } = notification

    const classes = `${styles.notification} ${styles[`${status}`]}`

    return <div className={classes}>
        <span>{result}</span>
        <span>{message}</span>
    </div>
}

export default Notification;