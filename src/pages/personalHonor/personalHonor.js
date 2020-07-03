import React, {Component} from 'react';
import './personalHonor.scss'
import ContentCard from "../../components/contentCard/contentCard";

class PersonalHonor extends Component {
	constructor(props){
		super(props);
		this.state = {
			honor:[]
		}
	}
	render() {
		return (
			<div className="personalHonor">
				<div className="PH_content">
					<ContentCard>
						<div>
							{"个人荣誉"}
							{this.state.honor}
						</div>
					</ContentCard>
				</div>
			</div>
		);
	}
}

export default PersonalHonor;
