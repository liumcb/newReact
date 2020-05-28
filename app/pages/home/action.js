// 页面发起的action
export const HOME_PAGE = 'HOME_PAGE';
export const homePage = (data) => ({type:HOME_PAGE,payload:data});
// saga中调用的action，页面和saga中的action不能相同，因为saga中的put相当于diapatch(action)，所以如果action相同，会一直不停调用
export const HOME_PAGE_SUCCESS = 'HOME_PAGE_SUCCESS';
export const homePageSuccess = (data) => ({type:HOME_PAGE_SUCCESS,payload:data})