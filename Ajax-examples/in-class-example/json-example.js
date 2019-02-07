"use strict"

let data = document.getElementById("text");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
    let jsonStr = data.value;
    let obj;
    
    try{
        obj = JSON.parse(jsonStr);
    }catch(error){
        console.log(error);
        return;
    }

    console.log(obj);

    obj.name = 'myObject';

    let newJsonStr = JSON.stringify(obj);

    
});