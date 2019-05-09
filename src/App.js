import React from 'react'
import logo from './logo.svg'
import './App.css'
import { ColorContext, colors } from './ColorContext'
import Panel from './Panel'
import ColorButton from './ColorButton'

class App extends React.Component {
  state = {
    color: colors[3],
    changeColor: () => {
      console.log('butts')
      this.setState({
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ColorContext.Provider value={this.state}>
            <Panel />
            <ColorButton />
          </ColorContext.Provider>
        </header>
      </div>
    )
  }
}

export default App
