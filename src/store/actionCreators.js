/*
* 在这里定义页面store所执行（dispatch）的方法，然后store会直接匹配reducer定义的方法
* */

//数据添加
export const addItem = (val) => ({
	type: 'add_list',  //这里的type要匹配上reducer
	val: val //这个是数据
});

//输入变化
export const inputChange = val => ({
	type: "inputChange",
	val: val,
})
