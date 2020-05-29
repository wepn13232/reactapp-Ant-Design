import React, {Component} from 'react';
import leftIcon from '../../assert/icon/下.svg'

import './header.scss'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header__content">
					<div className="header__LeftIcon">
						<img alt="leftIcon" src={leftIcon} className="header__LeftIcon-img"/>
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
