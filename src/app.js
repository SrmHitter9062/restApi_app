import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Zones from './components/Zones'

class App extends Component {
  render(){
    return (
      <div>
        Hello World!! its from react Component
        <Zones />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById('root'))