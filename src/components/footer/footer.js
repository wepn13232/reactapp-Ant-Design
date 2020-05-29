import React, {Component} from 'react';
import './footer.scss'
import homeIcon from '../../assert/icon/shore.png'
import lists from '../../assert/icon/menu.png'
import menu from '../../assert/icon/application.png'
import intro from '../../assert/icon/intro.png'
import {withRouter} from 'react-router-dom'

class Footer extends Component {

	componentDidMount() {
	}

	render() {
		return (
				<div className="footer">
					<div className="tabChose">
							<div className="tabChose-tab" onClick={()=>this.props.history.push("/index")}><img alt="home" src={homeIcon} className="iconPic"/><p>主页</p>
							</div>
							<div className="tabChose-tab" onClick={()=>this.props.history.push("/menu")}><img alt="menu" src={menu} className="iconPic"/><p>分类</p>
							</div>
						<div className="tabChose-tab" onClick={()=>this.props.history.push("/lists")}><img alt="lists" src={lists} className="iconPic"/><p>排行</p>
						</div>
						<div className="tabChose-tab"><img alt="personInfo" src={intro} className="iconPic"/><p>个人中心</p>
						</div>
					</div>
				</div>
		);
	}
}

export default withRouter(Footer);
