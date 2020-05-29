import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import routers from "./Router";

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
