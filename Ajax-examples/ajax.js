"use strict"

console.log("1");

document.addEventListener("DOMContentLoaded", () =>{
    let joke = document.getElementById("joke");
    let jokeButton = document.getElementById("newJoke");

    console.log("2");

    jokeButton.addEventListener("click", () => {
        console.log("3")   

        // let jokeText = getJoke();

        getJoke(text => {
            // this code runs when the request returns successfully
            joke.innerHTML = jokeText;
        });
        
    });
    
    console.log("4");
});

console.log("5");

// debugger runs -> console prints 15243

function getJoke(onSuccess, onFailure){
    // this object is provided by the browser to let us do AJAX
    // AJAX stands for Asynchronous JavaScript and XML
    // what the name means in practice is HTTP requests via JavaScript
    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        console.log(`readyState: ${xhr.readyState}`);

        // response received
        if(readyState === 4){
            let responseJSON = xhr.response;
            console.log(responseJSON);

            // HTTP response status 200-299 indicates success
            // responseJSON should contain the data requested
            if(xhr.status >= 200 && xhr.status < 300){
                console.log("success");
            
                // JSON.parse to deserialize JSON
                // JSON.stringify to serialize JSON

                let responseObj = JSON.parse(responseJSON);
                let text = responseObj.value.joke;
                onSuccess(text);
            }
            else[
                // some kind of error (e.g. 404 file not found)
                // responseJSON should contain details about error
                console.log("failure");
                if (onFailure() !== undefined)
                    onFailure(responseJSON);
                
            ]
        }
    });

    // set up the request to be made
    xhr.open('get', 'http://api.icndb.com/jokes/random/')

    // send the request
    xhr.send();
}

//  Fetch API, modern replacement for XMLHttpRequest object,
// using ES6 promises, not all browsers support

document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("jokeButton-fetch");
    let joke = document.getElementById("joke");

    button.addEventListener('click', () => {

        // certain functions return Promise objects
        // these represent a result that's not here yet
        // a promise can be resolved either to a success or a failure

        // you call promise.then(onSuccess) to specify what to do when a promise is successfully fulfilled
        // there's a second argument for failure
        // or use a .catch to catch any errors on the way down

        // if your then() function (ie callback with promises) returns a promise itself...
        // we can chain taht with further "then()" calls

        fetch("http://api.icndb.com/jokes/random")

            // response.json() returns a promise of the whole response body parsed from json
            // as soon as we get the response headers...
            // chain to that promise
            .then(response => response.json())
            // when we get _that_value, process it onto the page
            .then(data => {
                joke.innerHTML = data.value.joke;
            })
            // using .catch() at the end of a promise chain will handle any errors along the way
            .catch(err => {
                console.log(err)
            }
    })
})