import axios from 'axios';

var baseURL = "https://2y4w771wkb.execute-api.us-east-1.amazonaws.com/dev/api/";

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