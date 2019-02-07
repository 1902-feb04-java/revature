"use strict"

console.log("1");

document.addEventListener("DOMContentLoaded", () =>{
    let joke = document.getElementById("joke");
    let jokeButton = document.getElementById("newJoke");

    console.log("2");

    jokeButton.addEventListener("click", () => {
        console.log("3")   

        let jokeText = getJoke();
        joke.textContent = jokeText;
        
    });
    
    console.log("4");
});

console.log("5");

// debugger runs -> console prints 15243

function getJoke(){
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
            if(xhr.status >= 200 && xhr.status < 300){

            }
        }
    })
}