import React, {Component} from 'react';
import './workExprience.scss'

import {Input} from 'antd';
import ContentCard from "../../components/contentCard/contentCard";


const {Search} = Input;


class WorkExprience extends Component {

	constructor(props) {
		super(props);
		this.state = {
			workCompanies: [
				{
					compantName: "广州天高软件科技有限公司（2020.6~2020.9）",
					position: "医疗组-前端开发工程师",
				},
				{
					compantName: "广州明动软件股份有限公司（2020.9~至今）",
					position: "政务服务事业部-前端开发工程师",
				}
			],
		}
	}


	render() {
		return (
			<div className="personalPage">
				<div className="personalPage__content">
					{/*中间内容块*/}
					<ContentCard>
						<div>
							{"工作经历"}
							{
								<ul>
									{
										this.state.workCompanies.map((item, index) => {
											return (
												<li key={index}>
													{item.compantName}
													<ul>
														<li>{item.position}</li>
													</ul>
												</li>
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

export default WorkExprience;
