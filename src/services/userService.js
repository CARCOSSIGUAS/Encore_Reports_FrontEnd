export function login(token) {

    return fetch('http://datarequestqas.lbel.com.br/api/Security/SingleSignOn/?token=' + token)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {

            if (user && user.accountID ) {
                // store user details in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}