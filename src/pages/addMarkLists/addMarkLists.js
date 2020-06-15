import React, {Component} from 'react';
import './addMarkLists.scss'
import Header from "../../components/header/header";

class AddMarkLists extends Component {
	constructor(props) {
		super(props);
	}

	// 组件挂载
	componentDidMount() {
		var a = document.getElementsByTagName("body");
		a[0].style.backgroundColor = "#f9f9f9";
	}

	//返回记事本页面
	backToRouter() {
		this.props.history.push("/mark")
	}


	render() {
		return (
			<div>
				{/*头部标题*/}
				<Header headerTitle="添加记事" showIconFlag="true" backToRouter={()=>this.backToRouter()}/>
				{/*内容区域*/}
				<div className="markContent">
					123
				</div>
			</div>
		);
	}
}

export default AddMarkLists;
