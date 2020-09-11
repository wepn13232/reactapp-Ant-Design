import React, {Component} from 'react';
import './itemInfo.scss'
import BreadCrumb from "../../../../components/BreadCrumb/breadCrumb";

class ItemInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breadItems: [
				{
					name: '主页',
					path: '/homeIndex/form'
				},
				{
					name: '详细信息',
					path: '/homeIndex/itemInfo'
				},
			]
		}
	}

	render() {
		return (
			<div className='item-info'>
				<div className="bread-crumb">
					<BreadCrumb breadItems={this.state.breadItems} history={this.props.history}/>
				</div>
				{/*详细信息页面*/}
				<div className="info-content">
					<span>详细信息页面</span>
				</div>
			</div>
		);
	}
}

export default ItemInfo;
