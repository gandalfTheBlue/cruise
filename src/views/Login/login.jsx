import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd'
import { local, TOKEN, CHECK_PSWD } from 'src/utils/storage'
import * as actions from 'src/actions/Login/login'
import './login.less'

const FormItem = Form.Item
class LoginForm extends React.Component {
	constructor() {
		super()
		this.state = {
			checked: !!local.getItem(CHECK_PSWD),
			disabled: false,
		}
	}

	//  提交表单
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFieldsAndScroll(err => {
			if(!err) {
			}else{
				local.setItem(TOKEN, 'token')
				this.props.history.push('/main')
			}
		})
	}

	//  记住密码
	onCheck = e => {
		this.setState({
			checked: e.target.checked,
		})
		local.setItem(CHECK_PSWD, e.target.checked)
	}

	render() {
		const { getFieldDecorator } = this.props.form
		const { disabled, checked, user } = this.state
		return (
			<div className="login-page">
				<div className="login-wrap">
					<div className="login-title">Cyber-React</div>
					<div className="login-welcome">欢迎登录</div>
					<div className="login-form">
						<Form onSubmit={this.handleSubmit}>
							<FormItem required>
								{getFieldDecorator('username', {
									initialValue: user ? user.username : '',
									rules: [
										{
											required: true,
											message: '请输入用户名',
										},
									],
								})(<Input placeholder="用户名" />)}
							</FormItem>
							<FormItem required>
								{getFieldDecorator('password', {
									initialValue: user ? user.password : '',
									rules: [
										{
											required: true,
											message: '请输入密码',
										},
									],
								})(
									<Input type="password" placeholder="密码" />,
								)}
							</FormItem>
							<div className="login-form-checkbox">
								<Checkbox
									onChange={this.onCheck}
									checked={checked}>
									记住密码
								</Checkbox>
							</div>
							<Button
								block
								type="primary"
								disabled={disabled}
								htmlType="submit">
								登录
							</Button>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}

const Login = Form.create()(LoginForm)

export default connect(
	() => {},
	{
		...actions,
	},
)(Login)
