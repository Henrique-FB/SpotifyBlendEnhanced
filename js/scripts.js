
console.log("Script loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    button.addEventListener("click", () => {
        alert("Hello from JavaScript!");
    });
});