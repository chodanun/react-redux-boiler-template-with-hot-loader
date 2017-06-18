import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './App';

const routes = (store, history) => (
  <Router history={syncHistoryWithStore(history, store)}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/home" component={App}/>
    </div>
  </Router>
)
export default routes