import React from "react";
import LoginPage from "../pages/loginPage/loginPage";
import homeIndex from "../pages/home/homeIndex";
import Form from "../pages/home/childPages/form/form";
import ItemInfo from "../pages/home/childPages/ItemInfo/itemInfo";


//路由配置
const routers = [
	{
		path: "/",
		component: LoginPage,
		exact:true
	},
	{
		path: "/loginPage",
		component: homeIndex,
	},
	{
		path: "/homeIndex",
		component: homeIndex,
		children: [
			{
				path: "/homeIndex/form",
				component: Form,
			},
			{
				path: "/homeIndex/itemInfo",
				component: ItemInfo,
			},
		]
	},
]


export default routers;
