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

const {SubMenu} = Menu;


class HomeIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: props.route,
			themeColor: '', //主题颜色
			inputChoseColor: '', //选中的颜色
			visible: false,
			activeMenu:['1'], //默认打开的菜单页面
		}
	}

	componentDidMount() {
		this.props.history.push('/homeIndex/form')
	}

	//菜单栏点击
	handleClick = e => {
		switch (e.key) {
			case '1':
				this.props.history.push('/homeIndex/form');
				break;
		}
	};
	//选择主题颜色
	changeColor = e => {
		if (this.state.themeColor !== e.target.value) {
			this.setState({
				inputChoseColor: e.target.value,
			});
			this.showModal();
		}
	};
	//关闭对话框
	hideModal = () => {
		this.setState({
			visible: false,
		});
	};
	//显示对话框
	showModal = () => {
		this.setState({
			visible: true,
		});
	};
	//确认更改主题颜色
	confirmChangeColor = () => {
		this.setState({
			themeColor: this.state.inputChoseColor,
		}, () => {
			console.log(this.state.themeColor)
		});
		message.info('主题切换成功');
		this.hideModal();
	};


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
						<span>更换主题颜色</span>
						<input type="color" onBlur={this.changeColor}/>
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
