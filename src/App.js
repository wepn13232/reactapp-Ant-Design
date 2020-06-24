import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {BrowserRouter} from "react-router-dom";
import routers from "./Router";
//使用像素风风格css
import "../node_modules/nes.css/css/nes.css";
import '../src/assert/css/commonCss.scss'

function App() {
	return (
		<div className="App">
			<div className="container">
				<BrowserRouter>
						{routers}
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
