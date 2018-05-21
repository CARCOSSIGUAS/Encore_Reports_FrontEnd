export function accountHomeFetchData(url) {
    return  fetch(url)
           .then((response) => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((item) => { return item = item.result});
}