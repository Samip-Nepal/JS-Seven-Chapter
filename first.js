let sai=document.querySelector(".di")
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
};*/
//Handing events by event listeners
saii.addEventListener("click", (event) => {
    console.log("This is heading");
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX ,event.clientY);

});