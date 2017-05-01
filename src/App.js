import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux'
// import { test } from './actions'
export default class App extends Component {

  componentWillMount(){
    // setTimeout(()=> this.props.test(),3000)
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   a: state.test,
// })

// const mapDispatchToProps = (dispatch) => ({
//   test(){
//     dispatch(test())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)
