import React from 'react'
import logo from './logo.svg'
import Button, { ButtonSize, ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={(e) => {
            e.preventDefault()
            alert('12121')
          }}
          btnType={ButtonType.Primiary}
          size={ButtonSize.Large}
        >
          Click
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">
          点我
        </Button>
        <Button disable>Disabled</Button>
        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <code>const a = 'b'</code>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
