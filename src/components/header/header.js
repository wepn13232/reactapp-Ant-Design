import React, {Component} from 'react';
import leftIcon from '../../assert/icon/下.svg'

import './header.scss'

class Header extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	//左图标执行的操作，由props提供方法操作
	backRouter() {
		this.props.backToRouter();
	}

	//条件决定显示左图标
	showLefIcon() {
		return this.props.showIconFlag ? (
			<img alt="leftIcon" src={leftIcon} className="header__LeftIcon-img" onClick={() => this.backRouter()}/>
		) : ("");
	}


	render() {
		return (
			<div className="header">
				<div className="header__content">
					<div className="header__LeftIcon">
						{/*条件显示是否展示返回箭头*/}
						{this.showLefIcon()}
					</div>
					<span className="header__Title">{this.props.headerTitle}</span>
					<div className="header__Right">
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
