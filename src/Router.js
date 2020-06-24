import React from "react";
import {Route, Switch} from 'react-router-dom';
import LoginPage from "./pages/loginPage/loginPage";


//路由配置
const routers =
	<Switch>
		<Route path="/" component={LoginPage} exact/> {/*路由重定向，指向默认路由*/}
		<Route path="/loginPage" component={LoginPage}/>
	</Switch>

export default routers;
