import React, {Component} from 'react';
import {Skeleton} from 'antd';
import './index.scss'
import Footer from '../../components/footer/footer'
import Header from "../../components/header/header";
import store from "../../store";
import {addItem, inputChange} from "../../store/actionCreators";


class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			storeDate: store.getState()
		}
		store.subscribe(() => this.storeChange())
	}

	componentDidMount = () => {
		var a = document.getElementsByTagName('body');
		a[0].style.backgroundColor = "#f9f9f9";
	};

	componentWillUnmount = () => {
	};

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(this.state.storeDate)
	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		})
		// store.dispatch(inputChange(e.target.value))
	}

	storeChange() {
		this.setState({
			storeDate: store.getState()
		})
	}

	addItem() {
		store.dispatch(addItem(this.state.inputValue));
	}

	render() {
		return (
			<div>
				<Header headerTitle="主页"/>

				<div className="index">
					<input value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
					<button onClick={() => this.addItem()}>添加</button>
				</div>

				<div className="lists">
					{
						this.state.storeDate.lists.map((item, index) => {
							return (
								<p key={index}>{item}</p>
							)
						})
					}
				</div>

				<Footer/>
			</div>

		);
	}
}

export default Index;
