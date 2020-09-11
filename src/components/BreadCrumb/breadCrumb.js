import React, {Component} from 'react';
import './breadCrumb.scss'
import {Breadcrumb} from 'antd';


class BreadCrumb extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	//路由跳转
	changeRoute = (path) => {
		this.props.history.push(path);
	};

	render() {
		return (
			<div className={'breadCrumb'}>
				<Breadcrumb>
					{
						this.props.breadItems.map((item, index) => {
							return (
								<Breadcrumb.Item key={index}>
									<span onClick={() => this.changeRoute(item.path)}>{item.name}</span>
								</Breadcrumb.Item>
							)
						})
					}
				</Breadcrumb>
			</div>
		);
	}
}

export default BreadCrumb;
