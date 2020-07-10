import React, {Component} from 'react';
import './loginPage.scss';
import RcQueueAnim from "rc-queue-anim";


class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//表单
			formValue: {
				userName: "",
				password: ""
			},
			showDialog: false,
			pageShow: true,
			setTime: ""
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}

	componentWillUnmount() {

	}


	//Methods============

	handleClick() {
		this.setState({
			pageShow: !this.state.pageShow,
		})
	}

	animationOnEnd() {
		this.props.history.push("/homeIndex/workExprience")
	}


	//Methods__end===========


	render() {
		return (
			//登录主页
			//动画设置
			/*
			* duration 执行时间
			* type 执行方向
			* appear 开始是否执行
			* ease 动画曲线
			* animConfig 自定义动画执行
			* onEnd 动画执行完后回调
			* */
			<RcQueueAnim
				duration={1000}
				type={'top'}
				appear={false}
				ease={'easeInOutQuart'}
				animConfig={[
					{opacity: [1, 0], translateY: [0, '-100%']}
				]}
				onEnd={(callback) => {
					this.animationOnEnd()
				}}
			>
				{this.state.pageShow ? [
					<div className="loginPage" key="animateA" onClick={() => this.handleClick()}>
						{/*登录表单*/}
						<div className="loginForm">
							<h1 className="titleLogo">Sev3n像素风</h1>
							<h3 className="titleLogo">林启元的个人简历</h3>
						</div>

						<div className="mouseClick">
							<span>鼠标点击进入</span>
						</div>

						{/*nes图标*/}
						<div className="fixBottom">
							<i className="nes-pokeball fl"></i>
							<i className="nes-kirby fr"></i>
							<div className="clearFix"></div>
						</div>
					</div>
				] : null}

			</RcQueueAnim>
		);
	}
}

export default LoginPage;
