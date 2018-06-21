import './App.css';
import { connect} from 'react-redux'
import React, { Component } from 'react';
import { fetchCases } from './redux/actions/caseAction'

class App extends Component {
  render() {
    const { fetchCases } =  this.props
    return (
      <div className='redux-header'>
        <button onClick={fetchCases}> RUN </button>
      </div>
    );
  }
}




export default connect(null,{
  fetchCases
})(App);
