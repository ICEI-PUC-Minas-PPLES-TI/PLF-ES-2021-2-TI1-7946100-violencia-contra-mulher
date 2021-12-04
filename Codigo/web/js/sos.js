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
    this.getContacts();
}

function closeModal() {
    $("#modal").hide();
}


window.onclick = function(event) {
    if (event.target == modal) {
        $("#modal").hide();
    }
}

function getContacts()
{
    let contacts;

    if(JSON.parse(localStorage.db_contato).data.length > 0) {
        contacts = JSON.parse(localStorage.db_contato).data;

        contacts.forEach(contact => {
            document.querySelector("#modal-contacts").innerHTML += `
                <hr>
                <div class='col-md-12'>
                    <b>Nome: </b><span>${contact.nome}</span><br>
                    <b>Telefone contactado: </b><span>${contact.telefone}</span>
                </div>
            `;
        });
    } else {
        document.querySelector("#modal-contacts").innerHTML = "<b style='color: red'>Nenhum contato selecionado.</b>";
    }
}