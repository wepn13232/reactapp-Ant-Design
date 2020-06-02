import React, {Component} from 'react';
import './contentCard.scss'

class ContentCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className="contentCard">
					<h3>{this.props.children.props.children[0]}</h3>
					<div className="content">
						<ul>
							{
								this.props.children.props.children[1].map((i, index) => {
									return (
										<li key={index}>{i}</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default ContentCard;
