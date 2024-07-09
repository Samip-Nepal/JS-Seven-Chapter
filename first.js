/*let sai=document.querySelector(".di")
sai.onclick = (event) => {
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX ,event.clientY);
    console.log("Clicked");
};
let saii=document.querySelector("#heading")
/*saii.onmouseover = () => {
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX ,event.clientY);
    console.log("This is heading");
};
//Handing events by event listeners
saii.addEventListener("click", (event) => {
    console.log("This is heading");
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX ,event.clientY);

});*/


let button = document.querySelector(".button");
let mode = "light";

button.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black"; // Use a valid color value here
    } else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode);
});
