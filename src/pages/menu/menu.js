import React, {Component} from 'react';
import './menu.scss'
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: "分类"
		}
	}

	componentDidMount() {
	}


	render() {
		return (
			<div>
				<Header headerTitle={this.state.headerTitle}/>
				<div className="menu">
					这里是菜单页面
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Menu;
