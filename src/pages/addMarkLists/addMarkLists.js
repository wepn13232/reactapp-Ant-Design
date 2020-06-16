import React, {Component} from 'react';
import './addMarkLists.scss'
import Header from "../../components/header/header";
import {Form, Input, Button, Radio, message} from 'antd';
import store from "../../store";
import {addItem} from "../../store/actionCreators";


const {TextArea} = Input;

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

	//表单onFinish
	onFinish(val) {
		store.dispatch(addItem(val));
		message.success("提交成功！");
		this.props.history.push('/mark');
	}

	//表单onFinishFailed
	onFinishFailed(err) {
		console.log('Error', err);
		message.warning("提交出现问题")
	}


	render() {
		return (
			<div>
				{/*头部标题*/}
				<Header headerTitle="添加记事" showIconFlag="true" backToRouter={() => this.backToRouter()}/>
				{/*内容区域*/}
				<div className="markContent">
					<Form
						layout='horizontal'
						name="basic"
						initialValues={{remember: true}}
						onFinish={(val) => this.onFinish(val)}
						onFinishFailed={(err) => this.onFinishFailed(err)}
					>
						<Form.Item
							label="标题"
							name="title"
							rules={[{required: true, message: 'Please input your title!'}]}
						>
							<Input/>
						</Form.Item>

						<Form.Item
							label="内容"
							name="content"
							rules={[{required: true, message: 'Please input your content!'}]}
						>
							<TextArea row={4}/>
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

export default AddMarkLists;
