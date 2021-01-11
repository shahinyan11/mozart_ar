import axios from "axios";
// const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl = 'https://admin.mozart-vr.at/api';
// const baseUrl = 'http://192.168.0.128:8000/api';

function TokenHeaders() {
    return {
        headers : {
            // Authorization : `Bearer ${localStorage.getItem('token')}`
            'Content-type' : `application/json`
        }
    }
}
// function fileUploadHeaders() {
//     return {
//         headers : {
//             Authorization  : `Bearer ${localStorage.getItem('token')}`,
//             'content-type' : 'multipart/form-data'
//         }
//     }
// }

// export function exampleGet(data) {
//     return axios.get( `${baseUrl}webservices/user/${data.auth_type}`)
// }

// export function exampleGetWithParams(data) {
//     return axios.get( `${baseUrl}chat/room`, {
//         params : data,
//         ...TokenHeaders()
//     })
// }

// export function examplePost(data) {
//     return axios.post( `${baseUrl}auth/login`, data)
// }

// export function examplePostWithHeaders(data) {
//     return axios.post( `${baseUrl}chat/room`, data, TokenHeaders())
// }

// export function exampleDelete(data) {
//     return axios.delete( `${baseUrl}chat/room/${data.id}`, {
//         ...TokenHeaders()
//     })
// }

// examplePut function send put request. data['_method']  = put ;
// export function examplePut(data) {
//     data['_method']  = 'put'
//     return axios.post( `${baseUrl}chat/room`, data, TokenHeaders())
// }

// export function exampleUploadFiles(data) {
//     const headers = data.get('file[]') ?  fileUploadHeaders : TokenHeaders;
//     return axios.post( `${baseUrl}chat/post`, data, headers())
// }

export function startGame(data) {
    data['_method']  = 'put';
    return axios.post( `${baseUrl}/startGame`, data)
}

export function riddleSolved(data) {
    data['_method']  = 'put';
    return axios.post( `${baseUrl}/riddleSolved`, data)
}
export function updateLogicRiddle(data) {
    data['_method']  = 'put';
    return axios.post( `${baseUrl}/updateLogicRiddle`, data)
}
export function joinGame(data) {
    return axios.post( `${baseUrl}/joinGame`, data)
}
export function getUserActiveGame(data) {
    return axios.get( `${baseUrl}/game`, {
        params : data,
    })
}
export function takeElement(data) {
    return axios.post( `${baseUrl}/takeElement`, data)
}

export function correctElement(id) {
    return axios.post( `${baseUrl}/correctElement/${id}`, {_method: 'put'})
}
export function activateCup(id) {
    return axios.post( `${baseUrl}/activateCup/${id}`, {_method: 'put'})
}
export function activateElement(id) {
    return axios.post( `${baseUrl}/activateElement/${id}`, {_method: 'put'})
}

//TEST
export function removeUserJoins(data) {
    return axios.post( `${baseUrl}/removeUserJoins/${data.device_id}`, {_method: 'put'})
}
