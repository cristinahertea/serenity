import * as AS from './Article.styles'

export const Article = ({ gridArea, label, children }) => {
  return (
    <AS.ArticleWrapper style={{ gridArea: gridArea }}>
      <AS.ArticleTitle>{label}</AS.ArticleTitle>
      <AS.ArticleCopy>{children}</AS.ArticleCopy>
    </AS.ArticleWrapper>
  )
}
