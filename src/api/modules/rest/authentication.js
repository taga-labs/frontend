import axios from 'axios';

var baseURL = "http://localhost:6969/api/";

function createAccount(obj) {
    return axios({
        method: 'POST',
        url: baseURL + "leviathan/authentication/createAccount",
        data: obj
    });
}

function checkAuthentication(obj) {
    return axios({
        method: 'POST',
        url: baseURL + "leviathan/authentication/checkAccount",
        data: obj
    })
}

export {
    createAccount,
    checkAuthentication
}