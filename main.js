document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos A e B
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Validação: B deve ser maior que A
    if (campoB > campoA) {
        document.getElementById("mensagem").innerText = "Formulário válido! B é maior que A.";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").innerText = "Formulário inválido! B deve ser maior que A.";
        document.getElementById("mensagem").style.color = "red";
    }
});