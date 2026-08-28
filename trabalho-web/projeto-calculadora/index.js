let numero_atual = "";
let numero_anterior = "";

let botao_um = document.getElementById("um")
let botao_dois = document.getElementById("dois")
let botao_tres = document.getElementById("tres")
let botao_quatro = document.getElementById("quatro")
let botao_cinco = document.getElementById("cinco")
let botao_seis = document.getElementById("seis")
let botao_sete = document.getElementById("sete")
let botao_oito = document.getElementById("oito")
let botao_nove = document.getElementById("nove")
let botao_zero = document.getElementById("zero")
let operador_mais = document.getElementById("mais")

let num1 = "";

botao_um.onclick = function(){
    num1 += "1"
    console.log(num1)
}

botao_dois.onclick = function(){
    num1 += "2"
    console.log(num1)
}

botao_tres.onclick = function(){
    num1 += "3"
    console.log(num1)
}

botao_quatro.onclick = function(){
    num1 += "4"
    console.log(num1)
}

botao_cinco.onclick = function(){
    num1 += "5"
    console.log(num1)
}

botao_seis.onclick = function(){
    num1 += "6"
    console.log(num1)
}

botao_sete.onclick = function(){
    num1 += "7"
    console.log(num1)
}

botao_oito.onclick = function(){
    num1 += "8"
    console.log(num1)
}

botao_nove.onclick = function(){
    num1 += "9"
    console.log(num1)
}

botao_zero.onclick = function(){
    num1 += "0"
    console.log(num1)
}

operador_mais.onclick = function(){
    let numero1 = parseInt(num1)
    num1 = ""

}

