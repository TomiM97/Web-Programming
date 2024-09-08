if(document.readyState !== "loading") {
    console.log("Document is ready!");
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");
        initializeCode();
    })
}

function initializeCode() {
    const sayHello = document.getElementById("my-button");

    sayHello.addEventListener("click", function() {
        console.log("hello world");
    })
    
}