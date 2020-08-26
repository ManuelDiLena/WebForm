var form = document.getElementById("form"),
    button = document.getElementById("btn");

function validateData(e) {
    var inputName = document.form.name.value,
        inputLastname = document.form.lastname.value,
        inputEmail = document.form.email.value,
        inputTel = document.form.tel.value;

    if (inputName == 0 || inputLastname == 0 || inputEmail == 0 || inputTel == 0) {
        alert("Campos necesarios vacíos");
        e.preventDeFault();
    }
}

function validateSex(e) {
    if (document.form.sex[0].checked == true || document.form.sex[1].checked == true) {
    }
    else {  alert("Seleccione un sexo");
            e.preventDeFault;
    }
}

function validateTerm(e) {
    if (document.form.term.checked == true) {
    }
    else {  alert("Debe aceptar términos y condiciones");
            e.preventDeFault;
    }
}

function validate(e) {
    validateData(e);
    validateSex(e);
    validateTerm(e);
}

form.addEventListener("submit", validate);