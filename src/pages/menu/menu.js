import React, {Component} from 'react';
import './menu.scss'
import Footer from "../../components/footer/footer";
import { Skeleton } from 'antd';
import Header from "../../components/header/header";

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: "分类"
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}


	render() {
		return (
			<div>
				<Header headerTitle={this.state.headerTitle}/>
				<div className="menu">
					<Skeleton active/>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Menu;
