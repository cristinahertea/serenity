import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'
import routes from '../../constants/routes'

export const Menu = () => {
  return (
    <div className={styles.menuWrapper}>
      <NavLink to={'/'} className={styles.logo}>
        Cristina
      </NavLink>
      <nav className={styles.navWrapper}>
        {Object.entries(routes).map(([key, value]) => {
          return (
            <NavLink
              to={value}
              className={styles.navButton}
              activeClassName={styles.navButtonActive}
            >
              {key}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}
