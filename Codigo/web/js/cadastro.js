function openNav() {
    document.getElementById("side-nav").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}

function goBack() {
    window.history.back();
}

function openModal() {
    $("#modal").show();
}

function closeModal() {
    $("#modal").hide();
}

window.onclick = function(event) {
    if (event.target == modal) {
        $("#modal").hide();
    }
}