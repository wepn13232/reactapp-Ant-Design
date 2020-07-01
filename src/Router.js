import React from "react";
import LoginPage from "./pages/loginPage/loginPage";
import PersonalPage from "./pages/personalPage/personalPage";
import homeIndex from "./pages/home/homeIndex";


//路由配置
const routers = [
	{
		path: "/",
		component: LoginPage,
		exact: true
	},
	{
		path: "/loginPage",
		component: LoginPage,
	},
	{
		path: "/homeIndex",
		component: homeIndex,
		children:[
			{
				path:"/homeIndex/personalPage",
				component:PersonalPage,
			},
		]
	},
]


export default routers;
