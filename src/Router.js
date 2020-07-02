import React from "react";
import LoginPage from "./pages/loginPage/loginPage";
import WorkExprience from "./pages/workExprience/workExprience";
import homeIndex from "./pages/home/homeIndex";
import ItemExprience from "./pages/itemExprience/itemExprience";


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
				path:"/homeIndex/workExprience",
				component:WorkExprience,
			},
			{
				path:"/homeIndex/ItemExprience",
				component:ItemExprience,
			},
		]
	},
]


export default routers;
