/*
* 在这里定义页面store所执行（dispatch）的方法，然后store会直接匹配reducer定义的方法
* */

//列表添加
export const changeMenu = (val) => ({
	type: 'change_menu',  //这里的type要匹配上reducer
	val: val //这个是数据
});

