import React, {Component} from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import * as Urls from '../../utils/urls';

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
			lists: [],
			loading: true
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9";
		this.getListsInfo();
	}

	//获取数据
	getListsInfo() {
		Urls.getListsInfo('get').then(data => {
			this.setState({
				lists: data,
				loading: false
			});

		})
	}

	//页面lists组件渲染--抽取
	listsMap() {
		return (
			this.state.lists.map((item, index) => {
				return (
					<div style={cardMargin} key={index}>
						<Card title={item.title} content={item.content} loading={this.state.loading}/>
					</div>
				)
			})
		)
	}

	render() {
		//条件渲染
		const listsContent = this.state.lists.length === 0 ?
			(<Empty description={<span>暂无数据</span>}/>) :
			(this.listsMap())

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
