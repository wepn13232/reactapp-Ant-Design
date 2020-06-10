import React, { Component, useState, useEffect } from 'react';
import './mark.scss'
import Footer from "../../components/footer/footer";
import { Skeleton, Button, Radio, Collapse } from 'antd';
import Header from "../../components/header/header";
const { Panel } = Collapse;



class Menu extends Component {
	// 构造器
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			skeLoading: true,
			timer: ""
		}
	}

	// 组件挂载
	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9";
		this.setLoading();
	}

	// 组件更新
	componentDidUpdate(prevProps, prevState, snapshot) {
		// 输出变化前、变化后的数值变化
		console.log(prevState, this.state)
	}

	// 组件销毁前
	componentWillUnmount() {
		clearTimeout(this.state.timer)
	}

	// 列表加载完之后渲染
	setLoading() {
		this.setState({
			timer: setTimeout(() => {
				this.setState({
					skeLoading: false
				})
			}, 1500)
		})
	}


	render() {
		// 条件渲染列表
		const lists = !this.state.skeLoading ? (
			<Collapse accordion>
				<Panel header="This is panel header 1" key="1">
					<p>测试文字</p>
				</Panel>
				<Panel header="This is panel header 2" key="2">
					<p>测试文字</p>
				</Panel>
				<Panel header="This is panel header 3" key="3">
					<p>测试文字</p>
				</Panel>
			</Collapse>
		) : ("")

		return (
			<div>
				<Header headerTitle="记事本" />
				<div className="mark">
					<div className="headerBtn">
						<Button type="primary" shape="round">添加记事</Button>
					</div>
					{/* 记事本列表 */}
					<div className="markInfo">
						<Skeleton active loading={this.state.skeLoading} />
						<div className="content">
							{lists}
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default Menu;
