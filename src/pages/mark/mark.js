import React, {Component, useState, useEffect} from "react";
import "./mark.scss";
import Footer from "../../components/footer/footer";
import {Skeleton, Button, Radio, Collapse, Empty} from "antd";
import Header from "../../components/header/header";
import store from "../../store";

const {Panel} = Collapse;

class Mark extends Component {
	// 构造器
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			skeLoading: true,
			timer: "",
			listsData: store.getState()
		};
		store.subscribe(() => this.updateStore)
	}

	// 组件挂载
	componentDidMount() {
		var a = document.getElementsByTagName("body");
		a[0].style.backgroundColor = "#f9f9f9";
		this.setLoading();
	}

	// 组件更新
	componentDidUpdate(prevProps, prevState, snapshot) {
		// 输出变化前、变化后的数值变化
		// console.log(prevState, this.state);
	}

	// 组件销毁前
	componentWillUnmount() {
		clearTimeout(this.state.timer);
	}

	// 加载之后渲染列表
	showLists() {
		// 条件渲染列表
		const lists = !this.state.skeLoading ? (this.isEmpty()) : null;
		return lists;
	}

	// 列表加载
	setLoading() {
		this.setState({
			timer: setTimeout(() => {
				this.setState({
					skeLoading: false,
				});
			}, 1500),
		});
	}

	//判断是否有数据
	isEmpty() {
		return (
			this.state.listsData.lists.length > 0 ? (
				<Collapse accordion>
					{
						this.state.listsData.lists.map((item, index) => {
							return (
								<Panel header={item.title} key={index}>
									<p>{item.content}</p>
								</Panel>
							)
						})
					}
				</Collapse>
			) : (<Empty description={<span>暂无数据</span>}/>)
		)
	}

	//添加记事
	addLists() {
		this.props.history.push("/addMarkLists")
	}

	//监听更新store数据
	updateStore() {
		this.setState({
			listsData: store.getState()
		})
	}


	render() {
		return (
			<div>
				<Header headerTitle="记事本"/>
				<div className="mark">
					<div className="headerBtn">
						<Button type="primary" shape="round" onClick={() => this.addLists()}>
							添加记事
						</Button>
					</div>
					{/* 记事本列表 */}
					<div className="markInfo">
						<Skeleton active loading={this.state.skeLoading}/>
						<div className="content">{this.showLists()}</div>
					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Mark;
