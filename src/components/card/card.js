import React, {Component} from 'react';
import { Avatar,Skeleton} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './card.scss'

class Card extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="card">
				<div className="card__content">
					{/*左边头像*/}
					<div className="leftAva">
						<Avatar size={50} style={{ backgroundColor: '#ffd89d' }} icon={<UserOutlined />} />
					</div>
					{/*右边内容*/}
					<div className="rightContent">
						<Skeleton active paragraph={{rows:1}} loading={this.props.loading}>
							<p>{this.props.title}</p>
							<p>{this.props.content}</p>
						</Skeleton>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
