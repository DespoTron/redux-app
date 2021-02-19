import logo from './logo.svg'
import './App.css'
import NewComp from './components/NewComp'
import { Component } from 'react'

class App extends Component {
  styles = {
    fontStyles: 'bold',
    color: 'teal',
  }

  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
      </div>
    )
  }
}

export default App
