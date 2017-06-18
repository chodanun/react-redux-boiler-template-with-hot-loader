import { combineReducers } from 'redux'
import { routerReducer  } from 'react-router-redux'
import test from './count'

export default combineReducers({
	routing: routerReducer,
	test : test,
})