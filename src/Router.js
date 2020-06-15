import React from "react";
import {Route, Switch} from 'react-router-dom';
import Mark from "./pages/mark/mark.js";
import Index from "./pages/index";
import Lists from "./pages/lists/lists";
import PersonalPage from "./pages/personalPage/personalPage";
import AddMarkLists from "./pages/addMarkLists/addMarkLists";

//路由配置
const routers =
	<Switch>
		<Route path="/" component={Index} exact/> {/*路由重定向，指向默认路由*/}
		<Route path="/index" component={Index}/>
		<Route path="/mark" component={Mark}/>
		<Route path="/lists" component={Lists}/>
		<Route path="/personalPage" component={PersonalPage}/>
		<Route path="/addMarkLists" component={AddMarkLists}/>
	</Switch>

export default routers;
