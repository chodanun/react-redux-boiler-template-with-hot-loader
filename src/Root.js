import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import ConfigureStore from './ConfigureStore'
import routes from './routes';

const store = ConfigureStore(browserHistory)

export default () => (
	<Provider store={store} key='provider' >
		{routes(store, browserHistory)}
	</Provider>
)
