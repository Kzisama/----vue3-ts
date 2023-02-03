import request from "@/untils/http";

export const getUserInfoAPI = (uid: number) => {
	return request.post("/user_router_list", { uid });
};
