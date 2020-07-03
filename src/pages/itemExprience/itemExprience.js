import React, {Component} from 'react';
import ContentCard from "../../components/contentCard/contentCard";
import './itemExprience.scss'
import routerGuard from "../../utils/routerGuard";

class ItemExprience extends Component {
	constructor(props){
		super(props)
		this.state={
			itemExprience:["天高软件科技有限公司官网","海珠区窗口一体化项目"]
		}
	}

	componentDidMount() {
		console.log(this.props)
		//路由守卫
		routerGuard(this.props);
	}

	render() {
		return (
			<div className="itemExprience">
				<div className="itemExprience__content">
					<ContentCard>
						<div>
							{"项目经验"}
							{this.state.itemExprience}
						</div>
					</ContentCard>
				</div>
			</div>
		);
	}
}

export default ItemExprience;
