import React, { useEffect } from 'react'
import Button from './components/Button/button'
import Input from './components/Input/input'
import './app.scss'

function App() {
  const ref = React.createRef<HTMLButtonElement>()
  const ref2 = React.createRef<HTMLButtonElement>()
  {
    const a = 0
    console.log(a)
  }
  {
    const a = 2

    console.log(a)
  }
  useEffect(() => {
    setTimeout(() => {
      alert('我出现了')

      const ele = React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            top: 50,
            left: `50%`,
            background: '0'
          }
        },
        '66666'
      )
    }, 5000)
  }, [])
  return (
    <div
      className="App"
      style={{
        padding: 20
      }}>
      <h2>button</h2>
      <hr />
      <Button ref={ref2} className="mybutton">
        <div>填充颜色</div>
      </Button>
      <Button
        theme="primary"
        disabled
        onClick={() => {
          alert()
        }}>
        填充颜色1
      </Button>
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
      <Button variant="text">填充颜色</Button>
      <h2>shape</h2>
      <hr />
      <Button theme="success" shape="circle">
        A
      </Button>
      <Button type="submit" shape="round">
        round
      </Button>
      <h1>input</h1>
      <hr></hr>
      <Input
        onChange={(e) => {
          console.log(e)
        }}
      />
    </div>
  )
}

export default App
