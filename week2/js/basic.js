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

    populateTableWithExampleData();

    const submitDataButton = document.getElementById("submit-data");

    submitDataButton.addEventListener("click", (event) => {

        event.preventDefault();

        const username = document.getElementById("input-username").value;
        const email = document.getElementById("input-email").value;
        const isAdmin = document.getElementById("input-admin").checked ? "X" : "-";

        const table = document.getElementById("user-table").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();

        const usernameCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        const adminCell = newRow.insertCell(2);

        usernameCell.textContent = username;
        emailCell.textContent = email;
        adminCell.textContent = isAdmin;

        document.getElementById("input-username").value = "";
        document.getElementById("input-email").value = "";
        document.getElementById("input-admin").checked = false;

    });
    
    const clearTableButton = document.getElementById("empty-table");
    clearTableButton.addEventListener("click", () => {
        const tableBody = document.getElementById("user-table").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";
    })
}

// Example rows
function populateTableWithExampleData() {
    const table = document.getElementById("user-table").getElementsByTagName("tbody")[0];

    const exampleData = [
        ["Webmaster", "example@email.com", "X"],
        ["Webmaster2", "example2@email.com", "X"]
    ];

    exampleData.forEach(data => {
        const newRow = table.insertRow();
        data.forEach((text, index) => {
            const cell = newRow.insertCell(index);
            cell.textContent = text;
        });
    });
}
