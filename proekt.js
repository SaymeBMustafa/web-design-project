//Скролва прозореца на браузъра обратно до най-горната част на документа.
function topFunction() {
    document.body.scrollTop = 0; // за Safari
    document.documentElement.scrollTop = 0; // за Chrome, Firefox, IE и Opera
}