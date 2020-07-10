import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//接入fundDebug
var fundebug = require("fundebug-javascript");
fundebug.apikey = "23c88c96bbe5ee2e2664de018425e1d0c6e5138fe6dfc2a76292618ed17a1fda";

/*
* 针对React16版本之后的错误监控
* */
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true});
		// 将component中的报错发送到Fundebug
		fundebug.notifyError(error, {
			metaData: {
				info: info
			}
		});
	}

	render() {
		if (this.state.hasError) {
			return null
			// 也可以在出错的component处展示出错信息
			// return <h1>出错了!</h1>;
		}
		return this.props.children;
	}
}

ReactDOM.render(
	<ErrorBoundary><App/></ErrorBoundary>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
