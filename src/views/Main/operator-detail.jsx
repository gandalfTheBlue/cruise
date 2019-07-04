import { connect } from 'react-redux'
import { Rate } from 'antd'
import './operator-detail.less'
import * as actionsCommon from '../../actions/Common/common'
import * as actionsMain from '../../actions/Main'

class OperatorDetail extends React.Component {
	async componentDidMount() {
		this.props.setLayout('operator-detail')

		try {
			await this.props.fetchOperatorDetail({ id: 1085 })
			console.log(this.props.main.operatorInfo)
		} catch (err) {
			console.error('fetchOperatorDetail产生错误', err)
		}
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.main && nextProps.main.operatorInfo
	}

	onRateChanged() {
		this.props.setRate({ score: 10 })
	}

	handleSubmit() {
		let needSubmitOperator = this.props.main.operatorInfo
		this.props.submitComment({
			operatorId: 1085,
			score: needSubmitOperator.score,
			content: 'content 001',
		})
	}

	render() {
		if(this.props.main && this.props.main.operatorInfo) {
			let operator = this.props.main.operatorInfo
			console.log(JSON.stringify(operator))

			return (
				<div className="operator-detail">
					<div className="content">
						<div className="operator-info">
							<div className="portal-wrap">
								<i className="portal" />
							</div>
							<div className="info-wrap">
								<span className="title">{operator.name}</span>
								<div className="comment">
									<div className="stars" />
									<i className="icon-comment" />
									<span className="comment-num">评论(0)</span>
								</div>
							</div>
						</div>
						<div className="operator">
							<div
								className="description"
								dangerouslySetInnerHTML={{
									__html: operator.description,
								}}
							/>

							<div className="divider" />
							<div className="comment-wrap">
								<span className="title">评论</span>
								<div className="input-wrap">
									<textarea
										className="comment"
										name="comment"
										id="comment"
										cols="0"
										rows="5"
									/>
									<div className="rate">
										<div className="stars-wrap">
											<span className="title">评价</span>
											<Rate
												onChange={this.onRateChanged.bind(
													this,
												)}
											/>
										</div>

										<button
											className="submit"
											onClick={this.handleSubmit.bind(
												this,
											)}>
											提交评论
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="right-area">
						<div className="install-wrap">
							<button className="install">安装</button>
						</div>
						<div className="info">
							<div className="line">
								<span className="key">类型</span>
								<span className="value">
									{operator.categories[0]}
								</span>
							</div>
							<div className="line">
								<span className="key">当前版本</span>
								<span className="value">
									{operator.version}
								</span>
							</div>
							<div className="line">
								<span className="key">开发者</span>
								<span className="value">{operator.author}</span>
							</div>
							<div className="line">
								<span className="key">上传时间</span>
								<span className="value">xxx</span>
							</div>
							<div className="line">
								<span className="key">上架时间</span>
								<span className="value">xxx</span>
							</div>
						</div>
						<div className="tags-wrap">
							<span className="title">标签</span>
							<ul className="tags">
								{operator.tags.map(tag => {
									return (
										<li className="tag">
											<span className="text">{tag}</span>
										</li>
									)
								})}

								{/*<li className="tag"><span className="text">api-template</span></li>*/}
							</ul>
						</div>
						<div className="statistics-wrap">
							<span className="title">统计信息</span>
							<div className="statistics">
								<div className="line">
									<span className="key">下载次数</span>
									<span className="value">
										{operator.downloadCount}
									</span>
								</div>
								<div className="line">
									<span className="key">安装次数</span>
									<span className="value">
										{operator.installRecordCount}
									</span>
								</div>
								{/*<div className="line">*/}
								{/*<span className="key">运行次数</span>*/}
								{/*<span className="value">2323</span>*/}
								{/*</div>*/}

								{/*<div className="line">*/}
								{/*<span className="key">失败次数</span>*/}
								{/*<span className="value">22</span>*/}
								{/*</div>*/}
							</div>
						</div>
						<div className="versions-wrap">
							<span className="title">历史版本</span>
							<table className="versions">
								<thead>
									<tr>
										<th>版本号</th>
										<th>算子名称</th>
									</tr>
								</thead>
								<tbody>
									{operator.historyVersions.map(item => {
										return (
											<tr>
												<td>
													<i className="icon" />
													<span className="text">
														{item.version}
													</span>
												</td>
												<td>
													<span>{item.fileName}</span>
												</td>
											</tr>
										)
									})}
									{/*<tr>*/}
									{/*<td><i className="icon"></i><span className="text">v2.1.0</span></td>*/}
									{/*<td><span>genpro_attribute_begin</span></td>*/}
									{/*</tr>*/}
									{/*<tr>*/}
									{/*<td><i className="icon"></i><span className="text">v2.1.0</span></td>*/}
									{/*<td><span>genpro_attribute_begin</span></td>*/}
									{/*</tr>*/}
									{/*<tr>*/}
									{/*<td><i className="icon"></i><span className="text">v2.1.0</span></td>*/}
									{/*<td><span>genpro_attribute_begin</span></td>*/}
									{/*</tr>*/}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			)
		}else{
			return <div className="operator-detail">空数据</div>
		}
	}
}

export default connect(
	main => {
		return { ...main }
	},
	{
		...actionsCommon,
		...actionsMain,
	},
)(OperatorDetail)
