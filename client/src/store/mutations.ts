import { IRoute, IState } from "./state";

export default {
	set_route_tree(state: IState, list: IRoute[]) {
		state.routeTree = list;
	},
	set_auth(state: IState, auth: boolean) {
		state.hasAuth = auth;
	},
};
