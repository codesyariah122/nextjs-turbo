import * as React from 'react'

const Home = () => {
  const [text, setText] = React.useState<any>('')
  
  React.useEffect(() => {
    setText("New Hallo")
  }, [])
  
  return (
    <h1> {text} </h1>
  )
}

export default Home