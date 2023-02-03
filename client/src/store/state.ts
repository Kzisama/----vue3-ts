export interface IRoute {
	id: number;
	pid: number;
	path: string;
	name: string;
	title: string;
	link?: string;
	children?: IRoute[];
}

export interface IState {
	uid: number;
	hasAuth: boolean;
	routeTree: IRoute[];
}

export default {
	uid: 3,
	hasAuth: false, // 用户登录状态
	routeTree: [],
};
