import {
    reactive,
    computed,
    toRefs
} from 'vue';

import axios from 'axios';



// urn 이거 참조 https://www.elancer.co.kr/blog/view?seq=74
const api = async (urn, method, data, token) => {
    const url = "http://localhost:8081/" + urn
    // URL : URL 인대 URL URL이 같으면 생략 가능
    return (await axios({
        url,
        method,
        data,
        headers: {
            Authorization: token
        }
    }).catch(e => {
        console.log("http://localhost:8081/" + urn)
        console.log(e);
        return { data: e}; //error 발생 시 e 반환
    })).data
}
export {
    api
};