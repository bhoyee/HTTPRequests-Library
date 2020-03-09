/** 
* customHTTP Library
* Library for making HTTP Requests
* Using ES5 Protype with callback function

* @version 1.0.0
* @author Bhoyee
* @license MIT

*
*/


//custom http library 

function customHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP  GET Request with prototype
customHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let sef = this;

    this.onload = function() {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
           //console.log(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }


    this.http.send();
}

//Make an HTTP POST Request
customHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url , true);
    //setting the content type
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this;
    this.http.onload = function() {

        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP PUT Request

customHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url , true);
    //setting the content type
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this;
    this.http.onload = function() {

        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//Make an HTTP DELETE Request

customHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let sef = this;

    this.onload = function() {
        if(self.http.status === 200) {
            callback(null, 'Post Deleted');
           //console.log(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }


    this.http.send();
}
