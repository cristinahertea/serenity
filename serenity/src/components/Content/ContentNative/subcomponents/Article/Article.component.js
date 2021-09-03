export const Article = ({ gridArea, label, children }) => {
  return (
    <>
      <div className="article" style={{ gridArea: gridArea }}>
        <div className="article-title">{label}</div>
        <div className="article-copy">{children}</div>
      </div>
      <style>{`.article {
  width: 100%;
  height: 100%;
  font-family: 'Fredoka One', cursive;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-auto-rows: auto;
}

.article-copy {
  color: white;
  font-size: 1.5rem;
}

.article-title {
  color: white;
  font-size: 5rem;
  margin: auto;
}
`}</style>
    </>
  )
}
