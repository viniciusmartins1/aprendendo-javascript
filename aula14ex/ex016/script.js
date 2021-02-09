function contar() {
    var inicio = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var msg = document.getElementById("msg")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        msg.innerHTML = "Impossível Contar"
        //window.alert('[ERROR] Faltam dados!')
    } else {
        msg.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo Inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                msg.innerHTML += ` ${c} \u{1F449}`
            }
        } else if (i > f){
            for(var c = i; c >= f; c -= p){
                msg.innerHTML += ` ${c} \u{1F449}`
            }
        }
        msg.innerHTML += `\u{1F3C1}`
       
    }
    
}