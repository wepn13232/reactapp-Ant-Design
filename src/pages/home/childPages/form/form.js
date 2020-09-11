import React, {Component} from 'react';
import './form.scss'
import {Table} from 'antd';
import BreadCrumb from "../../../../components/BreadCrumb/breadCrumb";
import {changeMenu} from "../../../../store/actionCreators";
import store from "../../../../store";

const {Column} = Table;

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	}];

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breadItems: [
				{
					name: '主页',
					path: '/homeIndex/form'
				},
				{
					name: '项目表格',
					path: '/homeIndex/form'
				},
			]
		}
	}

	//跳转至详细信息
	toItemInfo(){
		this.props.history.push('/homeIndex/itemInfo');
		store.dispatch(changeMenu('2'))
	};

	render() {
		return (
			<div className="form-content">
				<div className="bread-crumb">
					<BreadCrumb breadItems={this.state.breadItems} history={this.props.history}/>
				</div>
				<div className="formTable">
					<Table dataSource={data} bordered>
						<Column title="名称" dataIdnex="name" key="name" render={(text, record) => (
							<span className={'item-name'} onClick={()=>this.toItemInfo()}>{record.name}</span>
						)}
						/>
						<Column title="年龄" dataIndex="age" key="age"/>
						<Column title="地址" dataIndex="address" key="address"/>
					</Table>
				</div>
			</div>
		);
	}
}

export default Form;
