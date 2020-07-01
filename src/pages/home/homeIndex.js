import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";

class HomeIndex extends Component {
	constructor(props){
		super(props);
		this.state={
			route: props.route
		}
	}
	render() {
		return (
			<div className="homeIndex">
				{renderRoutes(this.state.route.children)}
			</div>
		);
	}
}

export default HomeIndex;
