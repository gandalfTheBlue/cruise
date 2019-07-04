import { connect } from 'react-redux'
import Loading from 'src/components/Loading'
import * as actions from 'actions/App/app'
import * as commonActions from 'actions/Common/common'
import reducers from 'reducers/App/app'
import { injectReducer } from 'src/utils/injectReducer'
injectReducer('app', reducers)
import './app.less'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
		}
	}

	componentWillMount() {}

	render() {
		return (
			<div className="app">
				{this.props.loading ? <Loading /> : undefined}
				{this.props.children}
			</div>
		)
	}
}

export default connect(
	({ common }) => {
		return {
			loading: common.loading,
		}
	},
	{
		...commonActions,
		...actions,
	},
)(App)
