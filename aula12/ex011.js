var idade = 68
console.log(`Você tem ${idade} anos`)
if (idade < 18){
    console.log('Não Vota')
} else if (idade < 18 || idade > 65){
    console.log('Voto Opcional')
} else {
    console.log('Voto obrigatório')
}