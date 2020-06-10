import React, { Component } from 'react';
import './personalPage.scss'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { Input, Tag, Avatar } from 'antd';
import { AudioOutlined, UserOutlined } from '@ant-design/icons';
import ContentCard from "../../components/contentCard/contentCard";


const { Search } = Input;


class PersonalPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			workAbility: ["熟练...", "熟练...", "熟练...", "熟练...", "熟悉..."],
			itemExperience: ["广州天高软件科技公司官网"],
			workCompanies: ["广州天高软件科技有限公司", "广州明动软件股份有限公司"],
			skillTag: ['Vue.js', 'React.js', 'HTML', 'CSS', '小程序']
		}
	}

	componentDidMount() {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
	}



	render() {
		return (
			<div className="personalPage">
				<Header headerTitle="个人页面" />
				<div className="personalPage__content">
					{/*头部内容*/}
					<div className="content__header">
						<div className="header__left">
							<Avatar size={80} icon={<UserOutlined />} />
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
				<Footer />
			</div>
		);
	}
}

export default PersonalPage;
