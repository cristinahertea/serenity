import styles from './Article.module.scss'

export const Article = ({ gridArea, label, children }) => {
  return (
    <div className={styles.article} style={{ gridArea: gridArea }}>
      <div className={styles.articleTitle}>{label}</div>
      <div className={styles.articleCopy}>{children}</div>
    </div>
  )
}
