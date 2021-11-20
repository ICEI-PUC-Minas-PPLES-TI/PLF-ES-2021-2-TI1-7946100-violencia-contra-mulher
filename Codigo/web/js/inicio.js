window.onload = () => {

    $('.alert').css('display', 'none');

    setTimeout(function () {
        if (document.URL == 'http://127.0.0.1:5500/Codigo/web/pages/Inicio.html') {

             window.location.href = "../pages/Inicio2.html";
        }
        else {
            window.location.href = "../pages/Inicio.html";
        }
    }, 60000);

    $(document).ready(function () {
        $('#butAjuda').click(function () {
            $("#inputPalavraChave").val('');
        })
    })

    $(document).ready(function () {
        $('#pesquisar').click(function () {
            $("#inputPalavraChave").val('');
        })
    })

    $(document).ready(function () {
        $('#confirma').click(function () {
            let campoChave = $("#inputPalavraChave").val();
            if (campoChave.toUpperCase() == 'VIOLÊNCIA' ||(campoChave.toUpperCase() == 'VIOLENCIA') ) {
                if (document.URL == 'http://127.0.0.1:5500/Codigo/web/pages/Inicio.html') {
                    window.location.href = "../pages/denuncia.html";
                }
            }
            else {
                $('.alert').css('display', 'block');
            }
        })
    })

    $(document).ready(function () {
        $('#confirma').click(function () {
            let campoChave = $("#inputPalavraChave").val();
            if (campoChave.toUpperCase() == 'VIOLÊNCIA' ||(campoChave.toUpperCase() == 'VIOLENCIA') ) {
                window.location.href = "../pages/denuncia.html";
            }
            else {
                $('.alert').css('display', 'block');
            }
        })
    })

}

