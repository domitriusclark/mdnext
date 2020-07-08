export default (frontMatter) => {
  console.log(frontMatter)
  return ({ children }) => (
    <div>
      <h1>Hello there</h1>
      {children}
    </div>
  )
}