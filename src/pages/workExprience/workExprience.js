import React, { Component } from 'react';
import './workExprience.scss'

import { Input } from 'antd';
import ContentCard from "../../components/contentCard/contentCard";


const { Search } = Input;


class WorkExprience extends Component {

	constructor(props) {
		super(props);
		this.state = {
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
								{"工作经历"}
								{this.state.workCompanies}
							</div>
						</ContentCard>
					</div>
				</div>
			</div>
		);
	}
}

export default WorkExprience;
