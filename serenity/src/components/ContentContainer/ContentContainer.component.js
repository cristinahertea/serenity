import { Switch } from 'react-router-dom'
import styles from './ContentContainer.module.scss'

export const ContentContainer = ({ children }) => {
  return (
    <div className={styles.contentWrapper}>
      <Switch>{children}</Switch>
    </div>
  )
}
