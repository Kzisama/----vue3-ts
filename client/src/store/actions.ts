import { getUserInfoAPI } from "./../api/index";
import { Commit } from "vuex";
import { IRoute, IState } from "./state";
import fomatRouteTree from "@/untils/fomatTree";

export default {
	async set_route_tree({ commit, state }: { commit: Commit; state: IState }) {
		const routeList = (await getUserInfoAPI(state.uid)) as unknown as IRoute[];
		// 转换后变成树形结构
		const routeTree = fomatRouteTree(routeList);
		commit("set_route_tree", routeTree);
	},
};
