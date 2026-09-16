let lots = JSON.parse(localStorage.getItem("prunevito_lots")) || [];

function updateDashboard() {

    document.getElementById("lotCount").textContent = lots.length;

    if (lots.length > 0) {
        document.getElementById("lastLot").textContent =
            lots[lots.length - 1].number;
    } else {
        document.getElementById("lastLot").textContent = "-";
    }
}

function openPage(page) {

    if (page === "lot") {
        createLot();
    }

    if (page === "raport") {
        alert("Sectiunea Raport Calitate va fi adaugata in urmatoarea versiune.");
    }

    if (page === "uscare") {
        alert("Sectiunea Uscare va fi adaugata in urmatoarea versiune.");
    }

    if (page === "istoric") {
        showHistory();
    }
}

function createLot() {

    const number = prompt("Numar lot:");

    if (!number) {
        return;
    }

    const quantity = prompt("Cantitate prune (kg):");

    if (!quantity) {
        return;
    }

    const lot = {
        number: number,
        quantity: quantity,
        date: new Date().toLocaleDateString("ro-RO")
    };

    lots.push(lot);

    localStorage.setItem(
        "prunevito_lots",
        JSON.stringify(lots)
    );

    updateDashboard();

    alert("Lotul " + number + " a fost salvat.");
}

function showHistory() {

    if (lots.length === 0) {
        alert("Nu exista loturi inregistrate.");
        return;
    }

    let text = "ISTORIC LOTURI\n\n";

    lots.forEach((lot, index) => {

        text +=
            (index + 1) +
            ". Lot " +
            lot.number +
            " - " +
            lot.quantity +
            " kg - " +
            lot.date +
            "\n";

    });

    alert(text);
}

updateDashboard();
