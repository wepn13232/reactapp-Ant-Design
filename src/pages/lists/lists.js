import React, {Component} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import {Empty} from 'antd';
import './lists.scss'
import Card from "../../components/card/card";

const cardMargin = {
	marginBottom: "10px",
};
class Lists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: [1, 2, 3, 4,5,6,7,8],
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}

	render() {
		//条件渲染
		const listsContent = this.state.lists.length === 0 ? (<Empty description={<span>暂无数据</span>}/>) : (
			this.state.lists.map((item, index) => {
				return (
					<div style={cardMargin} key={index}>
						<Card/>
					</div>
				)
			})
		);

		return (
			<div className="lists">
				<Header headerTitle="排行"/>
				<div className="lists__content">
					{listsContent} {/*条件渲染*/}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Lists;
