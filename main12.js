let counter = 0;
const span = document.querySelector("span");
const button = document.getElementById("btn");
function fx() {
    console.log("hello")
    counter = counter + 1;
    span.innerText = `Total Click: ${counter}`;

}
button.addEventListener("click",fx);