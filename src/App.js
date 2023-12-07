import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {isClicked: true}

  toSubscribe = () => {
    this.setState(prevState => ({isClicked: false}))
  }

  toSubscribed = () => {
    this.setState(prevState => ({isClicked: true}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="main-container">
        <Welcome />
        {isClicked ? (
          <button className="button" type="button" onClick={this.toSubscribe}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.toSubscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default App
