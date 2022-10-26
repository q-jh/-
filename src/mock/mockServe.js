//引入mockjs插件开始模拟数据
import  Mock  from "mockjs";

import home from "./home";
import permission from "./permission";
import user from "./user";

Mock.mock('/api/home/getData',home.getStatisticalData)
Mock.mock('/api/permission/getpermission',permission.getMenu)
Mock.mock('/api/user/getuser',user.getUserList)
