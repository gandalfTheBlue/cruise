import { Route, Switch, Redirect } from 'react-router-dom'
import { injectReducer } from 'src/utils/injectReducer'

import Home from './home'
import reducers from 'reducers/Main'

injectReducer('main', reducers)

export default ({ ...props }) => {
	return (
		<Switch>
			<Route path={`${props.match.url}/home`} component={Home} />
			<Redirect
				to={{
					pathname: `${props.match.url}/home`,
					search: props.location.search,
				}}
			/>
		</Switch>
	)
}
