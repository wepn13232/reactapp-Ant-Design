import * as qs from "qs";

const postHeader = {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'};
const getHeader = {'Content-Type': 'application/json;charset=utf-8'};


export function getListsInfo(methods) {
	return fetch('/api/users/getListsInfo', {
		method: methods,
		headers: getHeader,
	}).then(res => {
		return res.json();
	})
}
