import React, {Component} from 'react';
import {Avatar, Tag} from "antd";
import {UserOutlined} from '@ant-design/icons';
import './avatorDiv.scss'


class AvatorDiv extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skillTag: ['Vue.js', 'React.js', 'HTML', 'CSS','JavaScript','小程序']
		}
	}

	render() {
		return (
			<div className="avatorDiv">
				{/*头部内容*/}
				<div className="content__header">
					<div className="header__left">
						<Avatar size={80} icon={<UserOutlined/>}/>
					</div>
					<div className="header__right">
						<div className="name">
							林启元
						</div>
						<div className="tag">
							<Tag color="blue">前端开发工程师</Tag>
						</div>
						<div className="skillTag">
							{
								this.state.skillTag.map((item, index) => {
									return (
										<Tag color="gold" key={index} className="mb5">{item}</Tag>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AvatorDiv;
