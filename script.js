function calvularIMC(){
    //obter os valores de peso e altura
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)

    //validação de dados

    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <=0){
        alert('Por favor, inseria valores vlaidos para pesso e altura')
        return 
    }

    //calculo de imc
    let imc = peso/(altura * altura)

    // classificação do imc

    let clasificacao =''

    if(imc < 18.5){
        clasificacao ='abaixo do peso'
    }else if(imc < 25){
        clasificacao ='peso normal'
    }else if(imc < 30){
        clasificacao ='sobrepeso'
    }else if(imc < 35){
        clasificacao ='obesidade gral I'
    }else if(imc < 40){
        clasificacao ='obesidade gral II'
    }else{
        clasificacao = 'obesidade gral III'
    }

    //exibir resultado

    document.getElementById('resultado').textContent = `Seu imc é:  ${imc.toFixed(2)}. clasificação: ${clasificacao}!`
}