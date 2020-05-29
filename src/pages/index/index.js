import React, {Component} from 'react';
import { Skeleton } from 'antd';
import './index.scss'
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";



class Index extends Component {

	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				// loading :false
			})
		},3000)
	}

	constructor(props) {
		super(props);
		this.state={
			headerTitle:"主页",
			loading:true,
		}
	}

	render() {
		return (
			<div>
				<Header headerTitle={this.state.headerTitle}/>

				<div className="index">
					<Skeleton active loading={this.state.loading}></Skeleton>
					<Skeleton active loading={this.state.loading}></Skeleton>
				</div>

				<Footer/>
			</div>

		);
	}
}

export default Index;
