import React, {Component} from 'react';
import ContentCard from "../../components/contentCard/contentCard";
import './personalAbility.scss'

class PersonalAbility extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ability: ["熟练使用各种web前端技术", "熟练使用vue框架并使用第三方库（Elementui、ECharts等）进行快速开发", "熟悉使用webpack构建项目、进行前后端分离跨域",
				"熟练使用Sass等预处理器编写样式", "熟悉使用mpVue进行微信小程序开发", "了解web性能优化，能提供性能优化方案",
				"熟练使用git等版本控制进行项目版本管理等"]
		}
	}

	render() {
		return (
			<div className="personalAbility">
				<div className="PA_content">
					<ContentCard>
						<div>
							{"个人能力"}
							{
								<ul>
									{
										this.state.ability.map((item, index) => {
											return (
												<li key={index}>{item}</li>
											)
										})
									}
								</ul>
							}
						</div>
					</ContentCard>
				</div>
			</div>
		);
	}
}

export default PersonalAbility;
