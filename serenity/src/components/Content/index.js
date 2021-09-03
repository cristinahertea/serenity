import { ContentCSS } from './ContentCSS'
import { ContentNative } from './ContentNative'
import { ContentSCSS } from './ContentSCSS'
import { ContentModule } from './ContentModule'
import { ContentStyled } from './ContentStyled'

const content = {
  CSS: ContentCSS,
  SCSS: ContentSCSS,
  Native: ContentNative,
  Module: ContentModule,
  Styled: ContentStyled,
}

export default content
