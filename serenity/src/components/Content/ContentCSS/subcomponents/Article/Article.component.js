import './Article.styles.css'

export const Article = ({ gridArea, label, children }) => {
  return (
    <div className="article" style={{ gridArea: gridArea }}>
      <div className="article-title">{label}</div>
      <div className="article-copy">{children}</div>
    </div>
  )
}
