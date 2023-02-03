import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: number = 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import routes, { IRoute } from "./data/router";
import users, { IUser } from "./data/user";

interface IBody {
	uid: number;
}

app.post("/user_router_list", (req: Request, res: Response) => {
	const { uid }: IBody = req.body;

	if (uid) {
		// 找到用户信息
		const userInfo: IUser | undefined = users.find((user) => user.id == uid);
		// 找到对应路由
		if (userInfo) {
			const userRouteList: IRoute[] = [];
			userInfo.auth.forEach((rid) => {
				routes.forEach((route: IRoute) => {
					if (route.id === rid) {
						userRouteList.push(route);
					}
				});
			});
			res.status(200).send({ msg: "获取用户权限成功", data: userRouteList });
		} else {
			res.status(200).send({ msg: "获取用户失败" });
		}
	}
});

app.listen(PORT, () => {
	console.log("server is running on  http://localhost:8081");
});
