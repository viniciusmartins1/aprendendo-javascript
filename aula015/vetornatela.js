let valores = [2, 3, 8, 9, 4]
valores.sort()
/*
for(var pos=0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log("Fim!")
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}