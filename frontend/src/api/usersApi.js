import { API_URL } from './config';

const loginApiURL = API_URL + '/login';

export const loginUser = (password) => {
    return fetch(loginApiURL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
    }).then((response) => {
        if(response.ok){
            return response.json();
        }else{
            throw new Error('Login Failed');
        }
    });
}