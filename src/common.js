import {
    reactive,
    computed,
    toRefs
} from 'vue';

import axios from 'axios';
import {useRoute} from "vue-router";


// urn 이거 참조 https://www.elancer.co.kr/blog/view?seq=74
const apiToken = async (urn, method, data, token) => {
    var forwardIp = document.URL.match(/\/\/(.*?)\//);
    if (forwardIp) {
        var ip = forwardIp[1].split(':')[0];
    }
    const url = "http://"+ ip + ":8081/" + urn
    console.log(url)
    // URL : URL 인대 URL URL이 같으면 생략 가능
    return (await axios({
        url,
        method,
        data,
        headers: {
            Authorization: token
        }
    }).catch(e => {
        return { data: e}; //error 발생 시 e 반환
    })).data
}
const api = async (urn, method, data) => {
    var forwardIp = document.URL.match(/\/\/(.*?)\//);
    if (forwardIp) {
        var ip = forwardIp[1].split(':')[0];
    }
    const url = "http://"+ ip + ":8081/" + urn
    console.log(url)
    // URL : URL 인대 URL URL이 같으면 생략 가능
    return (await axios({
        url,
        method,
        data
    }).catch(e => {
        return { data: e}; //error 발생 시 e 반환
    })).data
}

const loginApi = async (urn, method, data) => {
    var forwardIp = document.URL.match(/\/\/(.*?)\//);
    if (forwardIp) {
        var ip = forwardIp[1].split(':')[0];
    }
    const url = "http://"+ ip + ":8081/" + urn
    console.log(url)
    return (await axios({
        url, method, data, headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    }).catch(e => {
        return{data: e};
    }))
}
export {
    api, apiToken, loginApi
};