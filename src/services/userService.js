import config from 'react-global-configuration';
import configuration from '../config';

export function login(token, country) {
    
    config.set(configuration, { freeze: false });

    var urlPath = "";

    if (country == "73")
        urlPath = config.get('serverUrlApiBRA');
    else
        urlPath = config.get('serverUrlApiUSA');

    var confJSON = {
        serverUrlApi: urlPath
    };

    config.set(confJSON, { freeze: false });
    localStorage.setItem('urlService', JSON.stringify(confJSON));

    return fetch(urlPath + 'api/Security/SingleSignOn/?token=' + token)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            if (user && user.accountID) {
                // store user details in local storage to keep user logged in between page refreshes
                user.token = token;
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}