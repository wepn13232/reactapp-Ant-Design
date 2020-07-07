import React, {Component} from 'react';
import './personalHonor.scss'
import ContentCard from "../../components/contentCard/contentCard";

class PersonalHonor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			honor: ["2017.06 获得广州大学松田学院十六届“中星杯”科技节“班级 LOGO”大赛优秀奖",
				"2017.06 获得广州大学松田学院“中星杯”科技节网络攻防大赛二等奖",
				"2017.09 获得计算机科学与技术系团委学生会口传部部长任职聘书，青协部部长任职聘书，口传部轮值",
				"部部长任职聘书，计算机科研组媒体部部长任职聘书", "2017.12 获得广州大学松田学院“优秀学生干部",
				"2018.05 获得广州大学松田学院“优秀共青团员",
				"2018.10 获得广东省创新创业大赛“省级”项目奖",
				"2018.12 获得广州大学松田学院“优秀学生干部",
				"2019. 05 获得广州大学松田学院“优秀共青团",
				"2019.11 获得广州大学松田学院“优秀学生干部",
				"等..."]
		}
	}

	render() {
		return (
			<div className="personalHonor">
				<div className="PH_content">
					<ContentCard>
						<div>
							{"个人荣誉"}
							{
								<ul>
									{
										this.state.honor.map((item, index) => {
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

export default PersonalHonor;
