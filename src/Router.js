import React from "react";
import LoginPage from "./pages/loginPage/loginPage";
import WorkExprience from "./pages/workExprience/workExprience";
import homeIndex from "./pages/home/homeIndex";
import ItemExprience from "./pages/itemExprience/itemExprience";
import PersonalAbility from "./pages/personalAbility/personalAbility";
import PersonalHonor from "./pages/personalHonor/personalHonor";


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
			{
				path:"/homeIndex/PersonalAbility",
				component:PersonalAbility,
			},
			{
				path:"/homeIndex/PersonalHonor",
				component:PersonalHonor,
			},
		]
	},
]


export default routers;
