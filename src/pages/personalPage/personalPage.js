import React, {Component} from 'react';
import './personalPage.scss'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import {Input} from 'antd';
import {AudioOutlined} from '@ant-design/icons';

const {Search} = Input;


class PersonalPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}

	handleSearch() {
		console.log(this.state.inputValue);
		this.setState({
			inputValue: ""
		})
	}

	inputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}


	render() {
		return (
			<div className="personalPage">
				<Header headerTitle="个人页面"/>
				<div className="personalPage__content">
					<Search
						placeholder="input search text"
						enterButton="Search"
						size="large"
						value={this.state.inputValue}
						onSearch={() => this.handleSearch()}
						onChange={(e) => this.inputChange(e)}
					/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default PersonalPage;
