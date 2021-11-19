window.onload = () => {
    setTimeout(function () {
        if (document.URL == 'http://127.0.0.1:5500/Codigo/web/pages/Inicio.html') {
            window.location.href = "../pages/Inicio2.html";
        }
        else{
           window.location.href = "../pages/Inicio.html";   
        }
    }, 5000);
}

