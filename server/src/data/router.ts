export interface IRoute {
	id: number;
	pid: number;
	path: string;
	name: string;
	title: string;
	link?: string;
}

/* 
  pid = 0 表示是主路由，pid = x 表示该路由是 id为x 的路由的子路由
  link 只有子路由才有，方便router-link跳转
  path 表示路由自身路径，方便配置路由时使用
  name 配置路由时使用
  title 路由名称
*/

/* 
  课程管理 2 
    课程操作 3
      课程数据 4
    添加课程 5
  
  学生管理 6
    学生操作 7
    添加学生 8
*/

export default <IRoute[]>[
	{
		id: 2,
		pid: 0,
		path: "/course",
		name: "Course",
		title: "课程管理",
	},
	{
		id: 3,
		pid: 2,
		path: "operate",
		name: "CourseOperate",
		link: "/course/operate",
		title: "课程操作",
	},
	{
		id: 4,
		pid: 3,
		path: "info_data",
		name: "CourseInfoData",
		link: "/course/operate/info_data",
		title: "课程数据",
	},
	{
		id: 5,
		pid: 2,
		path: "add",
		name: "CourseAdd",
		link: "/course/add",
		title: "添加课程",
	},
	{
		id: 6,
		pid: 0,
		path: "/student",
		name: "Student",
		title: "学生管理",
	},
	{
		id: 7,
		pid: 6,
		path: "operate",
		name: "StudentOperate",
		link: "/student/operate",
		title: "学生操作",
	},
	{
		id: 8,
		pid: 6,
		path: "add",
		name: "StudentAdd",
		link: "/student/add",
		title: "添加学生",
	},
];
