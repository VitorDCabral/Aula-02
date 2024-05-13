var peso = Number(prompt ("digite seu peso"))
var altura = Number(prompt ("digite sua altura"))

var IMC = Number((peso*peso)/altura)


if (IMC <= 18,5 && IMC >=24,9 ){
    console.log(`Seu IMC é ${IMC} NORMAL`)
}

else if (IMC <= 25 && IMC >=29,9 ){
    console.log('SOBREPESO')
}

else if (IMC <= 30 && IMC >=39,9 ){
    console.log('OBESIDADE')
}