import React, {Component} from 'react';
import './loginPage.scss';
import PixDialog from "../../components/pixDialog/pixDialog";


class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//表单
			formValue: {
				name: "",
				password: ""
			},
			showDialog: false,
		}
	}


	//Methods============
	//登录
	login() {

	}

	//注册
	register() {
		this.changeFlag(true);
	}

	//改变弹窗显示
	changeFlag(flagVal) {
		this.setState({
			showDialog: flagVal,
		})
	}

	//显示弹窗
	showDialogFlag() {
		return (
			this.state.showDialog ? (<PixDialog changeFlag={(flagVal) => this.changeFlag(flagVal)}/>) : null
		)
	}

	//Methods__end===========


	render() {
		return (
			//登录主页
			<div className="loginPage">
				{/*登录表单*/}
				<div className="loginForm">
					<h1 className="titleLogo">Sev3n像素风</h1>
					{/*像素表单*/}
					{/*用户名*/}
					<div className="nes-field formItem">
						<label htmlFor="name_field">用户名</label>
						<input type="text" id="name_field" className="nes-input"/>
					</div>
					{/*密码*/}
					<div className="nes-field formItem">
						<label htmlFor="name_field">密码</label>
						<input type="text" id="pwd_field" className="nes-input"/>
					</div>

					<button type="button" className="nes-btn is-primary mr20" onClick={() => this.login()}>登录</button>
					<button type="button" className="nes-btn" onClick={() => this.register()}>注册</button>
				</div>
				{/*弹窗显示*/}
				{this.showDialogFlag()}
			</div>
		);
	}
}

export default LoginPage;
