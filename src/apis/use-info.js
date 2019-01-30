import HTTP from './http.js';

export const USERINFO = params => HTTP('post','/sso/login',params)
//这里使用了箭头函数，转换一下写法：
//export const LOGIN=function(req){
//    return req('post','/operator/login',params)
//}




//组件中使用
// async login(){
//     let user_info = await USERINFO(data);
// }

//假设登录成功,返回的数据应该是 
//user_info={code:200,msg:'success',data:{token:'xxxxx'}}
//然后根据返回的数据做相应的处理，比如储存token