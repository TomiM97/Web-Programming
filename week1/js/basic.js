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
    const addDataButton = document.getElementById("add-data");

    sayHello.addEventListener("click", function() {
        console.log("hello world");
        document.querySelector("h1").textContent = "Moi maailma";
    })

    addDataButton.addEventListener("click", function() {
        const data = document.createElement("li");

        data.textContent = document.getElementById("data").value;

        document.getElementById("my-list").appendChild(data);

    })
    
}