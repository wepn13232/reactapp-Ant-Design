/*
* 路由守卫，路由拦截
* */
const routerGuard = (props) => {
	let session = sessionStorage.getItem('userInfo');
	//有拦截验证标识
	if (props.route.authorization) {
		//有用户登录信息
		if (session) {
			return true;
		} else {
			props.history.push("/");
			return false;
		}
	} else {
		return true;
	}
}

export default routerGuard;
