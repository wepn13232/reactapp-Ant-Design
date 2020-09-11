//定义默认数据值
let defaultState = {
	activeMenu:['1'],//全局激活的菜单页面，默认第一个
};

// 深度拷贝数据
const deepCopy = content => JSON.parse(JSON.stringify(content));

/*
* 这里的state是拿的上面默认值库，action会进行匹配操作类型
* 这里使用了es6语法 function(state = defaultState , action){}
* */
export default (state = defaultState, action) => {

	//菜单栏变化
	if (action.type==='change_menu'){
		let newState = deepCopy(state);
		newState.activeMenu = [action.val]; //添加数据
		return newState
	}


	return state;  //最终拿到返回的newState
}
