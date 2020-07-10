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
	}

	componentWillUnmount() {
		this.setState({
			setTime: ""
		})
	}


	//Methods============

	handleClick() {
		this.setState({
			pageShow: !this.state.pageShow,
			setTime: setTimeout(() => {
				this.props.history.push("/homeIndex/workExprience")
			}, 1100)
		})
	}


	//Methods__end===========


	render() {
		return (
			//登录主页
			//动画设置
			<RcQueueAnim duration={1000} type={'top'} appear={false} key="demo"
			             ease={'easeInOutQuart'}
			             animConfig={[
				             {opacity: [1, 0], translateY: [0, '-100%']}
			             ]}
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
