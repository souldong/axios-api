import axios from 'axios';

let http = axios.create({
    baseURL : 'http://localhost:8080/',
    timeout : 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
})

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */

export default function (method, url, data = null) {
    method = method.toLowerCase();
    if (method == 'post') {
        return http.post(url, data);
    } else if (method == 'get') {
        return http.get(url, { params: data });
    } else if (method == 'delete') {
        return http.delete(url, { params: data });
    }else if(method == 'put'){
        return http.put(url,data);
    }else{
        // console.error('未知的method'+method);
        return false
    }
}