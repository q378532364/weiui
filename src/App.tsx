import React, { useEffect } from 'react'
import Button from './components/Button/button'
import './app.scss'

function App() {
  const ref = React.createRef<HTMLButtonElement>()
  const ref2 = React.createRef<HTMLButtonElement>()
  useEffect(() => {
    console.log(ref2)
  }, [])
  return (
    <div
      className="App"
      style={{
        padding: 20,
      }}>
      {/* <h2>button</h2>
      <hr />
      <Button ref={ref2}>填充颜色</Button>
      <Button theme="primary">填充颜色</Button>
      <Button theme="success">填充颜色</Button>
      <Button theme="danger">填充颜色</Button>
      <Button theme="warning" block>
        填充颜色
      </Button>
      <h2>variant</h2>
      <hr />
      <Button variant="outline" theme="primary">
        填充颜色
      </Button>
      <Button variant="dashed" theme="danger">
        填充颜色
      </Button>
      <Button variant="text" theme="success">
        填充颜色
      </Button> */}
      <div className='box'>

        <div className='item'></div>

      </div>
    </div>
  )
}

export default App
