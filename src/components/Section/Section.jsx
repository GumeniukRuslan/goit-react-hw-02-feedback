export const Section = ({primeHeader, title, children }) => {
  return (
    <section>
      {primeHeader ? <h1>{title}</h1> : <h2>{title}</h2>}
      {children}
    </section>
  )
}