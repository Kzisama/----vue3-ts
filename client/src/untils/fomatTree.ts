import { IRoute } from "@/store/state";

function fomatRouteTree(routeList: IRoute[]) {
	const parent = routeList.filter((routeInfo) => routeInfo.pid === 0);
	const children = routeList.filter((routeInfo) => routeInfo.pid !== 0);
	dateToTree(parent, children);

	return parent;

	function dateToTree(parent: IRoute[], children: IRoute[]) {
		parent.map((parent) => {
			children.map((child, index) => {
				if (parent.id === child.pid) {
					// 此时进行递归
					let _children: IRoute[] = JSON.parse(JSON.stringify(children));
					_children.splice(index, 1);
					dateToTree([child], _children);
					if (parent.children) {
						// 如果此时父路由有children属性，就追加
						parent.children.push(child);
					} else {
						// 如果此时父路由没有children属性，就设置一个初始值
						parent.children = [child];
					}
				}
			});
		});
	}
}

export default fomatRouteTree;
