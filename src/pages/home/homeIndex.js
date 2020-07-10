import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";
import {Menu} from 'antd';
import './homeIndex.scss'
import AvatorDiv from "../../components/avatorDiv/avatorDiv";
import RcQueueAnim from "rc-queue-anim";

const {SubMenu} = Menu;


class HomeIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: props.route
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}

	handleClick = e => {
		console.log(e.key)
		switch (e.key) {
			case '1':
				this.props.history.push("/homeIndex/workExprience");
				break;
			case '2':
				this.props.history.push("/homeIndex/ItemExprience");
				break;
			case"3":
				this.props.history.push("/homeIndex/PersonalAbility");
				break;
			case"4":
				this.props.history.push("/homeIndex/PersonalHonor");
				break;
		}
	};

	render() {
		return (
			<div className="homeIndex">
				{/*左边菜单*/}
				<RcQueueAnim type={"left"}>
				<div className="leftMenu" key={0}>
					<Menu
						onClick={this.handleClick}
						style={{width: 256, height: "100%"}}
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
					>
						<SubMenu
							key="sub1"
							title={
								<span className="nes-pointer">
				              <span>个人简历</span>
				            </span>}>
							<Menu.ItemGroup key="g1" title="经历方面">
								<Menu.Item key="1" className="nes-pointer">工作经历</Menu.Item>
								<Menu.Item key="2" className="nes-pointer">项目经验</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup key="g2" title="个人方面">
								<Menu.Item key="3" className="nes-pointer">个人能力</Menu.Item>
								<Menu.Item key="4" className="nes-pointer">个人荣誉</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
					</Menu>
				</div>
				</RcQueueAnim>


				{/*路由视图变化*/}
				<div className="routerView">
					{/*固定头部内容*/}
					<RcQueueAnim type={"top"} delay={500}>
						<div className="routerHeader" key={0}>
							<AvatorDiv/>
						</div>
						<RcQueueAnim type={"bottom"} key={1} delay={300}>
							<div key={0}>
								{renderRoutes(this.state.route.children)}
							</div>
						</RcQueueAnim>
					</RcQueueAnim>
				</div>
			</div>
		);
	}
}

export default HomeIndex;
