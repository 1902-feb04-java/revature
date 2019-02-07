"use strict"

// this won't work unless the script is loaded after the "body" node js created.
// document.body.style.backgroundColor = "blue";

// there is a "load" event that runs on everything 
// when the window is loaded, everything is loaded

// for every event, you can register an event handler with 
// a property named "on<event-name>"; an event handler is a function

window.onload = function(){
    document.body.style.backgroundColor = "lightgrey";
};

// javascript is a special object called teh glaobal object aka "window: 
// every variable in global scope is actually stored on the window object

// window and window.document are the same

// a more flexible way to do this is using an event listener
// also, a more modern way is to use arrow functions
window.addEventListener('load', () => {
    let header = document.body.firstElementChild;
    header.textContent = "DOM changed this";
});

// ideally we dont wait all the way until window loads
// that means, all images have downloaded

// all we really need is the elements to exist in the dOM and not be null
// DOMContentLoaded event fires sooner
window.addEventListener('DOMContentLoaded', () => {
    let header = document.getElementById("header");
    let clickCounter = 0;

    header.addEventListener('click', () => {
        clickCounter++;
        header.textContent = `DOM changed (clicked ${clickCounter} times)`;

        colA.innerHTML = "<em>Col</em><u>A</u>"
    });

    colA.addEventListener('mouseover', () => {
        let header1 = document.createElement('h1');
        header1.textContent = "Here I am."
        document.body.appendChild(header1);
    })

    let table = document.getElementById("myTable");
    
    // a listener on the first cell
    table.rows[0].cells[0].addEventListener('click', printEventDetails);

    // a listener on the whole table
    table.addEventListener(`click`, printEventDetails);

    // pass third parameter "true" (overriding default false)
    // to set the handler to capturing mode
    // a second listener on the whole table (capturing)
    table.addEventListener('click', printEventDetails, "true");

    // events, bubbling, vs. caputring

});

// in the DOM we have both elements and text nodes
// h1 elements are nodes inside of the body element
// https://javascript.info/dom-nodes

// getElementById, getElementsByClassName, getElementsByTagName, querySelector

// querySelector - gets the first matching element
// querySelectorAll - gets all matching elements

// textContent can be used to get and set the text inside an element

function printEventDetails(event){
    // if your event handlers take an argument, it will be set to the event object

    // type is the name of the event, (e.g. 'click')
    console.log(`event.type: ${event.type}`);

    // target is the element that fired the event originally
    console.log(`event.target: ${event.target}`);

    // currentTarget is the element that this even handler is registered on
    console.log(`event.currentTarget: ${event.currentTarget}`);

    // "this" is bound to the same as currentTarget (unless this is an arrow function)
    console.log(`this: ${this}`);

    // methods available on the event object
    // preventDefault(); -- browser has default event handlers 
    // (e.g. click on form btn sumbits, pressing enter on a formfield also submits, clicking a link navigates to that page)
    // preventDefault allows us to stop the default behavior from occurring

    // stopPropagation(); -- switches off all future event handlers on elements that come later in the sequence of capturing, target, bubbling phase, etc.
    // stopImmediatePropagation(); -- switches off all subsequent handlers of this event,
    // even ones on the same element (currentTarget)

    // using these stopPropagation events is generally bad practice

}