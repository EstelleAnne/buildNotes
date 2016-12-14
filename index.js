import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'

import App from './src/index.js';

class Demo extends Component{
  
  render () {
    return (
      <div>
      	  <App />
      </div>
    )
  }
}
render(<Demo />, document.getElementById('content'))
