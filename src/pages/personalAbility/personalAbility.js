import React, {Component} from 'react';
import ContentCard from "../../components/contentCard/contentCard";
import './personalAbility.scss'

class PersonalAbility extends Component {
	constructor(props){
		super(props);
		this.state = {
			ability:["熟练...","熟练...","熟练...","熟练...","熟练...",]
		}
	}
	render() {
		return (
			<div className="personalAbility">
				<div className="PA_content">
					<ContentCard>
						<div>
							{"个人能力"}
							{this.state.ability}
						</div>
					</ContentCard>
				</div>
			</div>
		);
	}
}

export default PersonalAbility;
