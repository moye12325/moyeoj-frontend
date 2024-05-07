import ACCESS_ENUM from "@/access/accessEnum";

const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前登录用户具有的权限 如果没有则表示未登录
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果需要用户登录才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //用户没登陆 则表示没用权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }

  if (needAccess === ACCESS_ENUM.ADMIN) {
    //如果不为管理员，则表示无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
