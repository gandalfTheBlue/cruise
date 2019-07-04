import 'core-js/es6/set'
import 'core-js/es6/map'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configStore from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Router from './router'

const history = createHistory()
const store = configStore(history)
/**
 * react-router 4.0开始不提供hashStory和browserStory
 * ConnectedRouter可以自动使用Provider的store
 * IntlProvider通过InjectIntl的方式注入，不依赖react的context
 **/
ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Router dispatch={store.dispatch} />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app'),
)
