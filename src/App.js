import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {BrowserRouter} from "react-router-dom";
import routers from "./router/routerConfig";


import {renderRoutes} from "react-router-config";

function App() {
	return (
		<div className="App">
			<div className="container">
				<BrowserRouter>
					{renderRoutes(routers)}
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
