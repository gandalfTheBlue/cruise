import { connect } from 'react-redux'
import cs from 'classnames'
import './operator-list.less'
import * as actionsApp from '../../actions/App/app'
import * as actionsMain from 'src/actions/Main/index'
import * as actionsCommon from '../../actions/Common/common'

class OperatorList extends React.Component {
	async componentDidMount() {
		this.props.setLayout('operator-list')

		try {
			await this.props.fetchOperators({ pageSize: 10, pageNo: 1 })
			await this.props.fetchLocalOperators()
			this.props.mergeOperators()
		} catch (err) {
			console.error(
				'fetchOperators,fetchLocalOperators,mergeOperators产生错误',
				err,
			)
		}

		// api.get('/repo-operator/operators/1081')
		//     .then((res) => {
		//         this.setState({curOperator: res});
		//         console.log('调用api接口[/repo-operator/operators/1081]，返回值:', res);
		//     })
		//     .catch((err) => {
		//         console.error('调用api接口[/repo-operator/operators/1081]，产生错误:', err);
		//     });
	}

	async handleTabChange(tab) {
		this.props.setTab({ curTab: tab.id })
	}

	handleInstall(e, operator) {
		e.stopPropagation()

		let params = {
			operators: [],
		}
		if(operator) {
			params.operators.push({
				id: operator.operatorNo,
				version: operator.version,
			})
		}

		this.props.installOperators(params)
	}

	handleJumpToDetail(operator) {
		// this.props.history.push(`/main/operator-detail/${operator.id}`)

		this.props.history.push({
			pathname: `/main/operator-detail/${operator.id}`,
			query: { id: operator.id },
		})
	}

	handleFlowUpdate() {
		this.props.fetchLocalFlowOperators()
	}

	handleFetchToken() {
		this.props.fetchToken()
	}

	handleRewriteToken() {
		this.props.rewriteToken()
	}

	render() {
		let operators = this.props.operatorsInfo

		return (
			<div className="operator-list">
				<section className="content">
					<button onClick={this.handleFlowUpdate.bind(this)}>
						流程更新接口联调
					</button>
					<button onClick={this.handleFetchToken.bind(this)}>
						获取Token
					</button>
					<button onClick={this.handleRewriteToken.bind(this)}>
						返写Token
					</button>
					<div className="operator-box">
						<div className="top-box">
							<ul className="tabs">
								{this.props.tabInfo.tabs.map(tab => (
									<li
										className={cs({
											tab: true,
											active:
												this.props.tabInfo.curTab
												=== tab.id,
										})}
										onClick={this.handleTabChange.bind(
											this,
											tab,
										)}>
										<span className="text">{tab.name}</span>
									</li>
								))}
							</ul>
							<div className="display-box">
								<div className="item tile-type active">
									<i className="rp-icon rp-icon-tile-type" />
								</div>
								<div className="item list-type">
									<i className="rp-icon rp-icon-list-type" />
								</div>
							</div>
						</div>

						<ul className="operators clearfix">
							{operators.list.map(operator => (
								<li
									className="card-wrap"
									onClick={this.handleJumpToDetail.bind(
										this,
										operator,
									)}>
									<div className="card">
										<div className="left">
											<i className="rp-icon rp-icon-operator-man" />
										</div>
										<div className="right">
											<div className="stars-wrap">
												<ul className="stars">
													<li className="item">
														<i className="rp-icon rp-icon-star active" />
													</li>
													<li className="item">
														<i className="rp-icon rp-icon-star active" />
													</li>
													<li className="item">
														<i className="rp-icon rp-icon-star active" />
													</li>
													<li className="item">
														<i className="rp-icon rp-icon-star active" />
													</li>
													<li className="item">
														<i className="rp-icon rp-icon-star" />
													</li>
												</ul>
											</div>
											<div className="type-wrap">
												<i className="rp-icon rp-icon-tile-type" />
												<span className="type">
													{operator.desc}
												</span>
											</div>
											<div className="name-wrap">
												<span className="name">
													{operator.name}
												</span>
											</div>
											<div className="bottom-bar">
												<div className="left-box">
													<span className="dev-name">
														{operator.author}
													</span>
												</div>
												<div className="right-box">
													{/*<span className="version">{operator.clientVersion}</span>*/}
													<span className="version">
														{operator.version}
													</span>
													{/*<button onClick={(e) => this.handleClick(e)}>*/}
													{/*Click me*/}
													{/*</button>*/}
													<button
														className="btn-options installed"
														onClick={e =>
															this.handleInstall(
																e,
																operator,
															)
														}>
														已安装
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
							))}
							<li className="card-wrap">
								<div className="card">
									<div className="left">
										<i className="rp-icon rp-icon-operator-man" />
									</div>
									<div className="right">
										<div className="stars-wrap">
											<ul className="stars">
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star" />
												</li>
											</ul>
										</div>
										<div className="type-wrap">
											<i className="rp-icon rp-icon-tile-type" />
											<span className="type">
												行业组件-集群剩余寿命预测
											</span>
										</div>
										<div className="name-wrap">
											<span className="name">
												轴承故障特征频率计算轴承故障…
											</span>
										</div>
										<div className="bottom-bar">
											<div className="left-box">
												<span className="dev-name">
													开发者名字
												</span>
											</div>
											<div className="right-box">
												<span className="version">
													v2.0.1
												</span>
												<button className="btn-options installed">
													已安装
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="card-wrap">
								<div className="card">
									<div className="left">
										<i className="rp-icon rp-icon-operator-man" />
									</div>
									<div className="right">
										<div className="stars-wrap">
											<ul className="stars">
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star" />
												</li>
											</ul>
										</div>
										<div className="type-wrap">
											<i className="rp-icon rp-icon-tile-type" />
											<span className="type">
												行业组件-集群剩余寿命预测
											</span>
										</div>
										<div className="name-wrap">
											<span className="name">
												轴承故障特征频率计算轴承故障…
											</span>
										</div>
										<div className="bottom-bar">
											<div className="left-box">
												<span className="dev-name">
													开发者名字
												</span>
											</div>
											<div className="right-box">
												<span className="version">
													v2.0.1
												</span>
												<button
													className="btn-options need-install"
													onClick={this.handleInstall.bind(
														this,
													)}>
													安装
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>

							<li className="card-wrap installed">
								<div className="card">
									<div className="left">
										<i className="rp-icon rp-icon-operator-man" />
									</div>
									<div className="right">
										<div className="stars-wrap">
											<ul className="stars">
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star active" />
												</li>
												<li className="item">
													<i className="rp-icon rp-icon-star" />
												</li>
											</ul>
										</div>
										<div className="type-wrap">
											<i className="rp-icon rp-icon-tile-type" />
											<span className="type">
												行业组件-集群剩余寿命预测
											</span>
										</div>
										<div className="name-wrap">
											<span className="name">
												轴承故障特征频率计算轴承故障…
											</span>
										</div>
										<div className="bottom-bar">
											<div className="left-box">
												<span className="dev-name">
													开发者名字
												</span>
											</div>
											<div className="right-box">
												<span className="version">
													v2.0.1
												</span>
												<button
													className="btn-options need-upgrade"
													onClick={this.handleInstall.bind(
														this,
													)}>
													更 新
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		)
	}
}

export default connect(
	({ main }) => {
		return { ...main }
	},
	{
		...actionsApp,
		...actionsCommon,
		...actionsMain,
	},
)(OperatorList)
