import { connect } from 'react-redux'
import cs from 'classnames'
import './header.less'
import * as actionsApp from '../../actions/App/app'
import * as actionsCommon from '../../actions/Common/common'

class Header extends React.Component {
	handleTabClick = category => {
		this.props.changeOperatorCategory({ cur: category.id })
	}

	componentWillReceiveProps() {}

	renderFilter() {
		let categoryInfo = this.props.categoryInfo
		if(this.props.layoutInfo === 'operator-list') {
			return (
				<div className="filter">
					<div className="category-box">
						<ul className="categories">
							{categoryInfo.categories.map(category => (
								<li
									className={cs({
										item: true,
										active:
											category.id === categoryInfo.cur,
									})}
									onClick={this.handleTabClick.bind(
										this,
										category,
									)}>
									{category.name}
								</li>
							))}
						</ul>
					</div>

					<div className="search-box">
						<div className="input-box">
							<input type="text" className="input" />
						</div>
						<div className="btn-wrap">
							<i className="btn-search rp-icon rp-icon-search" />
						</div>
					</div>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="header">
				<div className="logo-box">
					<div className="logo" />
					<div className="logo-word rp-icon rp-icon-logo-word" />
				</div>
				{this.renderFilter()}
				<div className="user-box">
					<div className="avatar-wrap">
						<i className="avatar" />
					</div>
					<div className="name-wrap">
						<span className="name rp-icon rp-icon-list-type" />
					</div>
				</div>
			</div>
		)
	}
}

// export default Header;
export default connect(
	({ app, common }) => {
		return { ...app, ...common }
	},
	{
		...actionsApp,
		...actionsCommon,
	},
)(Header)
