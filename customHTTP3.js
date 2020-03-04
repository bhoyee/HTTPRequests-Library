/** 
* customHTTP Library
* Library for making HTTP Requests 
* Using ES7 async and await

* @version 3.0.0
* @author Bhoyee
* @license MIT

*
*/

class customHTTP {
    //Make HTTP GET Requst
    async get(url) {

            const response = await fetch(url);
            const resData = await response.json();
            return resData;
        }

    

    // mamke HTTP POST Requst 
    
    async post(url, data) {
        const response = await fetch(url, {
            method: 'Post',
            headers: {
                'content-text': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
            return resData;

    }

     // mamke HTTP PUT Requst 

   async put(url, data) {
       const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const resData = await response.json();
            return resData;

    }

    
     // mamke HTTP DELETE Requst 

  async delete(url) {
      const rsponse = await fetch(url, {
                method: 'DELETED',
                headers: {
                    'content-type': 'application/json'
                }
            })
            const resData = await 'Resource Deleted';
            return resData;

    }


}