import React, {Component} from 'react';
import './loginPage.scss';
import {
	Form,
	Input,
	Button,
	message
} from 'antd';


const layout = {
	labelCol: {span: 4},
};

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {

	}

	componentWillUnmount() {

	}


	//Methods============

	//表单完成填写
	onFinish = (val) => {
		if (val.username === 'linqy' && val.password === '131898') {
			message.success("登录成功");
			this.props.history.push('/homeIndex');
		} else {
			message.error('账号或密码错误！');
		}
	};
	//表单填写错误
	onFinishFailed = err => {
		console.log(err);
	};

	//Methods__end===========


	render() {
		return (
			<div className="login-page">
				<div className="wallpaper">
					{/*填写表单*/}
					<div className="fill-form">
						<div className={'form-title'}>Sev3n Website</div>
						<Form layout="horizontal"
						      {...layout}
						      onFinish={this.onFinish}
						      onFinishFailed={this.onFinishFailed}>
							<Form.Item
								label="用户名"
								name="username"
								rules={[{required: true, message: '请输入用户名'}]}>
								<Input type={"text"}/>
							</Form.Item>
							<Form.Item
								label="密码"
								name="password"
								rules={[{required: true, message: '请输入密码'}]}>
								<Input type={"password"}/>
							</Form.Item>
							<Form.Item className="btnGroup">
								<Button type="primary" htmlType="submit">登录</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;
