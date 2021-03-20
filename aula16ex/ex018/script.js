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
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    for(var valor = 0; valor <= valores.length; valor ++){
        res.innerHTML += ''
        res.innerHTML += `Ao todo, temos ${valores.length} numeros cadastrados`

        var maior = valores[0]
        var menor = valores[0]

        if(valores[valor] > maior){
            maior = valores[valor]
        }
        
        if(valores[valor] < menor){
            menor = valores[valor]
        }

        res.innerHTML += `o maior valor informado foi ${maior}`
        res.innerHTML += `O menor valor informado foi ${menor}`

        var soma = 0
        soma += valores[valor]

        res.innerHTML += `Somando os valores, temos ${soma}`

        var media = soma/(valores.length)

        res.innerHTML += `A média dos valores digitados é ${media}`


    }
}