import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";
import {Menu} from 'antd';
import './homeIndex.scss'
import AvatorDiv from "../../components/avatorDiv/avatorDiv";

const {SubMenu} = Menu;


class HomeIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: props.route
		}
	}

	handleClick = e => {
		console.log(e);
	};

	render() {
		return (
			<div className="homeIndex">
				{/*左边菜单*/}
				<div className="lefMenu">
					<Menu
						onClick={this.handleClick}
						style={{width: 256 , height:"100%"}}
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
					>
						<SubMenu
							key="sub1"
							title={
								<span>
				              <span>个人简历</span>
				            </span>}>
							<Menu.ItemGroup key="g1" title="经历方面">
								<Menu.Item key="1">工作经历</Menu.Item>
								<Menu.Item key="2">项目经验</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup key="g2" title="个人方面">
								<Menu.Item key="3">个人能力</Menu.Item>
								<Menu.Item key="4">个人荣誉</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
					</Menu>
				</div>


				{/*路由视图变化*/}
				<div className="routerView">
					{/*固定头部内容*/}
					<div className="routerHeader">
						<AvatorDiv/>
					</div>
					{renderRoutes(this.state.route.children)}
				</div>
			</div>
		);
	}
}

export default HomeIndex;
