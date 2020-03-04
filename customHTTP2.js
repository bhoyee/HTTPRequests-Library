/** 
* customHTTP Library
* Library for making HTTP Requests
* Using ES6 fetch and Promises

* @version 2.0.0
* @author Bhoyee
* @license MIT

*
*/

class customHTTP {
    //Make HTTP GET Requst
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));

        });

    }

    // mamke HTTP POST Requst 
    
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));

        });

    }

     // mamke HTTP PUT Requst 

     put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));

        });

    }

    
     // mamke HTTP DELETE Requst 

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETED',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => resolve('Resource Deleted'))
            .catch((err) => reject(err));

        });

    }


}