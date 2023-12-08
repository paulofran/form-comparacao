var compareButton = document.querySelector(".container button");

    compareButton.addEventListener("click", function(e) {
        e.preventDefault(); // Impede o envio do formulário
        var numA = document.getElementById('numA').value;
        var numB = document.getElementById('numB').value;

        if(parseFloat(numB) > parseFloat(numA)) {
            alert("O número " + numB + " é maior que o número " + numA + ".");
        } else if(numB < numA) {
            alert("O número " + numA + " é maior que o número " + numB + ".");
        } else {
            alert("Os números " + numB + " e " + numA + " são iguais.");
        } 

        document.getElementById('form-comparacao').reset();
    });