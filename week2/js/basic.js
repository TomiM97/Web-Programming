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

        const existingRowIndex = findRowIndexByUsername(username);

        if (existingRowIndex !== -1) {
            modifyRow(existingRowIndex, username, email, isAdmin);
        } else {
            addNewRow(username, email, isAdmin);
        }

    });
    
    const clearTableButton = document.getElementById("empty-table");
    clearTableButton.addEventListener("click", () => {
        const tableBody = document.getElementById("user-table").getElementsByTagName("tbody")[0];
        tableBody.innerHTML = "";
    })
}

// Checks if there's a username already in use and returns the row index or -1 if nothing is found
function findRowIndexByUsername(username) {
    const table = document.getElementById("user-table").getElementsByTagName("tbody")[0];
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        if (cells[0].textContent === username) {
            return i; 
        }
    }
    return -1; 
}

// Modifies a row
function modifyRow(rowIndex, username, email, isAdmin) {
    const table = document.getElementById("user-table").getElementsByTagName("tbody")[0];
    const row = table.getElementsByTagName("tr")[rowIndex];

    row.cells[0].textContent = username;
    row.cells[1].textContent = email;
    row.cells[2].textContent = isAdmin;
}

// Adds a row
function addNewRow(username, email, isAdmin) {
    const table = document.getElementById("user-table").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    const usernameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const adminCell = newRow.insertCell(2);

    usernameCell.textContent = username;
    emailCell.textContent = email;
    adminCell.textContent = isAdmin;
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
