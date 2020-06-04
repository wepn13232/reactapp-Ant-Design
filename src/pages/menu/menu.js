import React, {Component, useState, useEffect} from 'react';
import './menu.scss'
import Footer from "../../components/footer/footer";
import {Skeleton} from 'antd';
import Header from "../../components/header/header";


class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: "分类",
			inputValue: "",
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9";
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(prevState,this.state)
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}


	render() {

		return (
			<div>
				<Header headerTitle="分类"/>
				<div className="menu">
					<input value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Menu;
