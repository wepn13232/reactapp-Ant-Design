import React, {Component} from 'react';
import './homeIndex.scss'
import {
	Menu,
	Button,
	Modal,
	message
} from 'antd';
import {
	AppstoreOutlined,
} from '@ant-design/icons';
import {renderRoutes} from "react-router-config";
import store from "../../store";

const {SubMenu} = Menu;


class HomeIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: props.route,
			themeColor: '', //主题颜色
			inputChoseColor: '', //选中的颜色
			visible: false,
			activeMenu: ['1'], //默认打开的菜单页面
			storeData: store.getState(), //store数据
		};
		//store数据监听
		store.subscribe(() => this.getStoreData())
	}

	componentDidMount() {
		this.props.history.push('/homeIndex/form')
	}

	//store数据监听
	getStoreData() {
		this.setState({
			storeData: store.getState(),
		},()=>{
			console.log(this.state.storeData)
		})
	};

	//菜单栏点击
	handleClick = e => {
		switch (e.key) {
			case '1':
				this.props.history.push('/homeIndex/form');
				break;
		}
	};
	getData(){
		console.log(this.state.storeData)
	}


	render() {
		return (
			<div className="homeIndex">
				{/*左边内容区域*/}
				<div className="left-content">
					{/*菜单栏*/}
					<div className="menu">
						<Menu
							onClick={this.handleClick}
							style={{width: 256}}
							defaultSelectedKeys={this.state.activeMenu}
							defaultOpenKeys={['sub1']}
							mode="inline">
							<SubMenu
								key="sub1"
								title={
									<span>
						              <AppstoreOutlined/>
						              <span>Sev3n菜单栏</span>
				                    </span>
								}
							>
								<Menu.ItemGroup key="g1" title="开发过的项目">
									<Menu.Item key="1">项目表格</Menu.Item>
									<Menu.Item key="2" disabled={true}>详细信息</Menu.Item>
								</Menu.ItemGroup>
							</SubMenu>
						</Menu>
					</div>
				</div>
				{/*右边内容区域*/}
				<div className="right-content">
					{/*顶部个人信息*/}
					<div className="head-content">
						<span onClick={()=>this.getData()}>获取数据</span>
						<div className="avator"/>
					</div>
					{/*内容切换区域*/}
					<div className="routerView">
						{renderRoutes(this.state.route.children)}
					</div>
				</div>


				{/*弹出框*/}
				<Modal
					title="更换主题颜色"
					visible={this.state.visible}
					onOk={this.confirmChangeColor}
					onCancel={this.hideModal}
					okText="确认"
					cancelText="取消">
					<span>是否确认更换主题颜色？</span>
				</Modal>
			</div>
		);
	}
}

export default HomeIndex;
