import requests from "./requests";

export const reqGetData = () => requests({url:'/home/getData',method:'GET'})

export const reqGetPermission = (data) => requests({url:'/permission/getpermission',data,method:'post'})

export const reqGetUser = () => requests({url:'/user/getuser',method:'GET'})

