// Gets the input value factorial

function factorial(n) {

    if(n == 0 || n == 1) {

        return 1;
    }
    else {

        for(i = n - 1; i >= 1; i--) {
            
            n *= i; // this for loop decrease i value multiplying like 6x5x4x3x2x1
        }
    }

    return n;
}

function combination() {
    
    var n = parseInt(document.getElementById("elements").value);
    var k = parseInt(document.getElementById("groupings").value);

    if(n < k) {

        alert("O Número de elementos deve ser maior ou igual o número de agrupamentos");
        return;
    }
    else if(isNaN(n) || isNaN(k)) {

        alert("Digite apenas valores numéricos");
        return;
    }

    var combination = Math.round(factorial(n) / (factorial(k) * factorial(n - k)));

    document.getElementById("resposta").innerHTML=combination;
}

function arranjo() {

    var n = parseInt(document.getElementById("elements").value);
    var k = parseInt(document.getElementById("groupings").value);

    if(n < k) {

        alert("O Número de elementos deve ser maior ou igual o número de agrupamentos");
        return;
    }
    else if(isNaN(n) || isNaN(k)) {

        alert("Digite apenas valores numéricos");
        return;
    }

    var arranjo = Math.round(factorial(n) / (factorial(n - k)));

    document.getElementById("resposta").innerHTML=arranjo;
}