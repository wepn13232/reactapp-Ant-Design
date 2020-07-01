import React, {Component} from 'react';
import './contentCard.scss'

class ContentCard extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	//组件条件显示
	childrenShow() {
		return (
			Array.isArray(this.props.children.props.children[1]) ? (
				<ul>
					{
						this.props.children.props.children[1].map((i, index) => {
							return (
								<li key={index}>{i}</li>
							)
						})
					}
				</ul>
			) : (
				this.props.children.props.children[1]
			)
		)
	}

	render() {

		return (
			<div>
				<div className="contentCard">
					<h3>{this.props.children.props.children[0]}</h3>
					<div className="content">
						{this.childrenShow()}
					</div>
				</div>
			</div>
		);
	}
}

export default ContentCard;
