let num = document.getElementById("txtn")
let lista =  document.querySelector("select#res")
let res = document.getElementById("txtres")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function select(elemento) {
    txtres.innerHTML += `Valor ${elemento.value} adicionado`
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let valor in valores){
            soma += valores[valor]
            if (valores[valor] > maior) {
                maior = valores[valor]
            }
            if (valores[menor] < menor){
                menor = valores[valor]
            }
        }

        media = soma/tot


        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
        res.innerHTML += `<p> o menor valor encontrado foi ${menor}</p>`
        res.innerHTML += `<p>A somatória dos valores foi ${soma}</p>`
        res.innerHTML += `<p>a média dos valores foi ${media}</p>`
    }
    
}