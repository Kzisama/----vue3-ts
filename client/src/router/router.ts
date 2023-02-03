// 将routeTree转换成路由信息对象
import { IRoute, IState } from "@/store/state";
import { Router, RouteRecordRaw } from "vue-router";
import { Store } from "vuex";

function generateRoute(routerTree: IRoute[]) {
	let newRoutes = routerTree.map((route) => {
		let _route: RouteRecordRaw = {
			path: route.path,
			name: route.name,
			component: () => import(`@/views/${route.name}.vue`),
			children: [],
		};

		// 如果路由有children，那么继续添加
		if (route.children) {
			_route.children = generateRoute(route.children);
		}

		return _route;
	});
	return newRoutes;
}

export default function routerBeforeEach(router: Router, store: Store<IState>) {
	router.beforeEach(async (to, from, next) => {
		await store.dispatch("set_route_tree");
		const newRoutes = generateRoute(store.state.routeTree);
		newRoutes.forEach((route) => router.addRoute(route));
		next();
	});
}
