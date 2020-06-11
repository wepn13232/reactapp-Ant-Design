//定义默认数据值
let defaultState = {
	inputValue: "",
	lists: []
};

// 深度拷贝数据
const deepCopy = content => JSON.parse(JSON.stringify(content));

/*
* 这里的state是拿的上面默认值库，action会进行匹配操作类型
* 这里使用了es6语法 function(state = defaultState , action){}
* */
export default (state = defaultState, action) => {
	if (action.type === "add_list") {
		//拷贝数据，官方不推荐直接修改state，因拷贝出来修改之后再赋值回去
		let newState = deepCopy(state);
		newState.lists.push(action.val); //添加数据

		return newState
	}
	return state;  //最终拿到返回的newState
}
