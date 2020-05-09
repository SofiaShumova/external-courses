function fetch(method, url, options = { body:null, headers:null }) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }

        if(method === 'POST'){
            for(let key in options.headers){
                xhr.setRequestHeader(key, options.headers[key])
            }
            xhr.send(JSON.stringify(options.body));
        } else {
            xhr.send();
        }
    })
}