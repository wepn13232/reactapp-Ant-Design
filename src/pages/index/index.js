import React, {Component} from 'react';
import './index.scss'
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";


class Index extends Component {
	constructor(props) {
		super(props);
		this.state={
			headerTitle:"主页"
		}
	}

	render() {
		return (
			<div>
				<Header headerTitle={this.state.headerTitle}/>

				<div className="index">
					这里是主页
				</div>

				<Footer/>
			</div>

		);
	}
}

export default Index;
