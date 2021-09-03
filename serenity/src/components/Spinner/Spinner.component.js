import styles from './Spinner.module.scss'
export const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.loaderDots}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.spinnerMessage}>Loading...</div>
    </div>
  )
}
