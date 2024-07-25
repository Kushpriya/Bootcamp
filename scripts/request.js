import {serialize} from './serialize.js';

export function request(url, method = "GET", data = {}) {
    switch (method) {
        case "GET":
            return handleGetRequest(url);

        case "POST":
            return handlePostRequest(url, data);

        default:
            console.log("Invalid HTTP method");
    }
}

async function handlePostRequest(url, data = {}) {
    let response = {};
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': "application/json"
            }
        });
        const result = await res.json();
        response["success"] = true;
        response["data"] = serialize(result);
    } catch (err) {
        response["success"] = false;
        response["message"] = err.message;
    }
    return response;
}

async function handleGetRequest(url,data) {
    let response = {};
    try {
        const res = await fetch(url, {
        method:'GET',
        headers: {
            'Content-Type': 'application/json'
        } 
    }).then(res => res.json());
        response["success"] = true;
        response["data"] = serialize(result);
    } catch (err) {
        response["success"] = false;
        response["message"] = err.message;
    }
    return response;
}

