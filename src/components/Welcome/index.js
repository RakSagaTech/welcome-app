// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div className="welcome-app-container">
        <h1 className="heading"> Welcome </h1>
        <p className="description">Thank you! Happy Learning </p>
        <button type="button" className="subscribe-button">
          {' '}
          Subscribe{' '}
        </button>
      </div>
    )
  }
}

export default Welcome
