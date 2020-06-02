import React, {Component} from 'react';
import {Skeleton} from 'antd';
import './index.scss'
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";


class Index extends Component {

	componentDidMount = () => {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9"
		this.setState({
			timer:setTimeout(()=>{
				this.setState({
					loading: false
				})
			},2000)
		})
	};

	componentWillUnmount = () => {
		clearTimeout(this.state.timer)
	};

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			timer:"",
		}
	}

	render() {
		return (
			<div>
				<Header headerTitle="主页"/>

				<div className="index">
					<Skeleton active loading={this.state.loading}></Skeleton>
				</div>

				<Footer/>
			</div>

		);
	}
}

export default Index;
