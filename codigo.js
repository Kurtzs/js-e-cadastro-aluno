function testa_form() {
    var aluno = document.forms["formalunos"]["aluno"].value;

    var cpf = document.forms["formalunos"]["cpf"].value;

    if (aluno == "") {
        alert("Nome precisa ser informado.");
        document.forms["formalunos"]["aluno"].focus();  // Corrigir nome do campo
        return false;
    }

    if (cpf == "") {
        alert("CPF do aluno precisa ser informado.");
        document.forms["formalunos"]["cpf"].focus();
        return false;
    }

    return true;
}
