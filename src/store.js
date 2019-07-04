import { routerMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware } from 'redux'
import thunkMiddleware from './middlewares/thunk'
import promiseMiddleware from './middlewares/promise'
import errorMiddleware from './middlewares/error'
import loadingMiddleware from './middlewares/loading'

import { createStore } from 'src/utils/injectReducer'
import common from 'reducers/Common/common'

export default history => {
	return createStore(
		{
			router: routerReducer,
			common: common,
		},
		applyMiddleware(
			routerMiddleware(history),
			thunkMiddleware,
			loadingMiddleware,
			promiseMiddleware,
			errorMiddleware,
		),
	)
}
