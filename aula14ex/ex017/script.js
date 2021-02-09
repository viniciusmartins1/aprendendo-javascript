function caucular() {
    var num = document.getElementById('txtn')
    var n = Number(num.value)
    var msg = document.getElementById('res')
    var soma = document.getElementById('som')
    var div = document.getElementById('div')
    var sub = document.getElementById('sub')

    if(n.length == 0){
        window.alert('[ERROR] Digite um número para ser cauculado!')
    } else{
        msg.innerHTML = '   '
        for(var c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            msg.appendChild(item)
        }
        soma.innerHTML = '   '
        for(var c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            soma.appendChild(item)
        }
        div.innerHTML = '   '
        for(var c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            let resultado = n - c
            item.text = `${n} / ${c} = ${resultado.toFixed(1).replace(".", ",")}`
            div.appendChild(item)
        }
        sub.innerHTML = '   '
        for(var c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            sub.appendChild(item)
        }
    }
}
