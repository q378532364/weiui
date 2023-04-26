import React from 'react'
import Button from './components/Button/button'

function App() {
  const ref = React.createRef()
  return (
    <div
      className="App"
      style={{
        padding: 20,
      }}>
      <h2>button</h2>
      <hr />
      <Button>填充颜色</Button>
      <Button theme="primary">填充颜色</Button>
      <Button theme="success">填充颜色</Button>
      <Button theme="danger">填充颜色</Button>
      <Button theme="warning" block>
        填充颜色
      </Button>
    </div>
  )
}

export default App
