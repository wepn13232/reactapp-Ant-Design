import React from "react";
import {Route, Switch} from 'react-router-dom';
import Menu from "./pages/menu/menu.js";
import Index from "./pages/index";
import Lists from "./pages/lists/lists";

//路由配置
const routers =
	<Switch>
		<Route path="/" component={Index} exact />  {/*路由重定向，指向默认路由*/}
		<Route path="/index" component={Index}></Route>
		<Route path="/menu" component={Menu}></Route>
		<Route path="/lists" component={Lists}></Route>
	</Switch>

export default routers;
