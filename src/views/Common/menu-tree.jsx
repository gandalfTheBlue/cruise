import { connect } from 'react-redux'
import cs from 'classnames'

import './menu-tree.less'
import * as actionsApp from '../../actions/App/app'
import * as actionsCommon from '../../actions/Common/common'

class MenuTree extends React.Component {
	componentWillReceiveProps() {
		// console.log('---xxx Sider componentWillReceiveProps this.props.sider', this.props);
	}

	handleMenuClick = menu => {
		this.props.setMenu({ curMenu: menu.id })
	}

	handleBackClick() {
		this.props.history.replace('/main/operator-list')
	}

	renderMenu() {
		let menuTreeInfo = this.props.menuTreeInfo
		switch (this.props.layoutInfo) {
		case 'operator-list':
			const treeRoot = menuTreeInfo.menus.map(menu => {
				return (
					<li className="item-parent">
						{/*<span className="text">所有分类</span>*/}
						<ul className="categories">
							<li className="item">
								<ul className="sub-categories">
									{menu.menus.map(menuSub => {
										return (
											<li
												className={cs({
													'sub-item': true,
													active:
															menuTreeInfo.curMenu
															=== menuSub.id,
												})}
												onClick={this.handleMenuClick.bind(
													this,
													menuSub,
												)}>
												<span className="sub-text">
													{menuSub.name}
												</span>
											</li>
										)
									})}
								</ul>
								<div className="divider" />
							</li>
						</ul>
					</li>
				)
			})
			return (
				<section className="menu-tree">
					<ul className="categories-parent">{treeRoot}</ul>
				</section>
			)

		case 'operator-detail':
			return (
				<section className="menu-tree">
					<div className="left-area">
						<div
							className="back-to-list"
							onClick={this.handleBackClick.bind(this)}>
							<i className="icon" />
							<span className="text">返回算子列表</span>
						</div>
					</div>
				</section>
			)
		default:
			return <span>default</span>
		}
	}

	render() {
		return this.renderMenu()
	}
}

// export default Sider;

export default connect(
	({ app, common }) => {
		return {
			...app,
			...common,
		}
	},
	{
		...actionsApp,
		...actionsCommon,
	},
)(MenuTree)
