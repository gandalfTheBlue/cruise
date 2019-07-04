import { useState } from 'react'
import { connect } from 'react-redux'

import './home.less'

function Home() {
	const [title] = useState('this is home page')
	return (
		<div>
			<h1>{title}</h1>
			<div id="cyber-react-mfe-sub" />
		</div>
	)
}

export default connect(
	() => {},
	{},
)(Home)
