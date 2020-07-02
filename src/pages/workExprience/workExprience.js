import React, { Component } from 'react';
import './personalPage.scss'

import { Input } from 'antd';
import ContentCard from "../../components/contentCard/contentCard";


const { Search } = Input;


class WorkExprience extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			workAbility: ["熟练...", "熟练...", "熟练...", "熟练...", "熟悉..."],
			itemExperience: ["广州天高软件科技公司官网"],
			workCompanies: ["广州天高软件科技有限公司", "广州明动软件股份有限公司"],
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}



	render() {
		return (
			<div className="personalPage">
				<div className="personalPage__content">

					{/*中间内容块*/}
					<div>
						<ContentCard>
							<div>
								{"个人能力"}
								{this.state.workAbility}
							</div>
						</ContentCard>
						<ContentCard>
							<div>
								{"项目经验"}
								{this.state.itemExperience}
							</div>
						</ContentCard>
						<ContentCard>
							<div>
								{"工作经历"}
								{this.state.workCompanies}
							</div>
						</ContentCard>
						<ContentCard>
							<div>
								{"个人简介"}
								{"主业是音乐、健身，副业兼职前端开发的一个人下人"}
							</div>
						</ContentCard>
					</div>
				</div>
			</div>
		);
	}
}

export default WorkExprience;
