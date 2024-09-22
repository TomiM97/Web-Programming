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
    const muniTable = document.getElementById("muni-table").getElementsByTagName("tbody")[0];

    async function getTable() {
        const url = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
        try {
            const dataPromise = await fetch(url)
            const dataJSON = await dataPromise.json()

            const municipalities = dataJSON.dataset.dimension.Alue.category.label;
            const populations = dataJSON.dataset.value;

            Object.keys(municipalities).forEach((key, index) => {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
            
                td1.innerText = municipalities[key];
                td2.innerText = populations[index];
                tr.appendChild(td1)
                tr.appendChild(td2)

                muniTable.appendChild(tr)

            });
            console.log("Table is ready!");
        } catch (error) {
            console.error("Error fetching table data: ", error);
        }
    }
    getTable();
}