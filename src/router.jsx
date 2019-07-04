import { hot } from 'react-hot-loader'
import Async from 'react-code-splitting'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import App from 'views/App/app'
import Login from 'views/Login/login'
import { TOKEN, local } from 'src/utils/storage'

const Main = props => (
	<Async load={import('views/Main')} componentProps={props} />
)

class Routes extends React.Component {
	render() {
		const { props } = this
		if(!local.getItem(TOKEN)) {
			return (
				<Switch>
					<Route path="/login" component={Login} />
					<Redirect
						to={{
							pathname: '/login',
							search: props.location.search,
						}}
					/>
				</Switch>
			)
		}
		return (
			<Switch>
				<App {...props}>
					<Switch>
						<Route path="/main" component={Main} />
						<Redirect
							to={{
								pathname: '/main/home',
								search: props.location.search,
							}}
						/>
					</Switch>
				</App>
			</Switch>
		)
	}
}
export default withRouter(hot(module)(Routes))
