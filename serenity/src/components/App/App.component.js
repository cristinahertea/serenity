import { BrowserRouter, Route } from 'react-router-dom'
import { Menu } from '../Menu'
import { ContentContainer } from '../ContentContainer'
import Content from '../Content'
import styles from './App.module.scss'
import routes from '../../constants/routes'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appWrapper}>
        <Menu />
        <ContentContainer>
          <Route path={routes.NATIVE} component={Content.Native} />
          <Route path={routes.CSS} component={Content.CSS} />
          <Route path={routes.SCSS} component={Content.SCSS} />
          <Route path={routes.MODULES} component={Content.Module} />
          <Route path={routes.STYLED} component={Content.Styled} />
          <Route path={'/'} component={Content.Native} />
        </ContentContainer>
      </div>
    </BrowserRouter>
  )
}
