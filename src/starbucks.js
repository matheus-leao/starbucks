export function contabilizarQuantidadeDeCafe(listaPedidos){
    let quantidadeCafe = 0
    for(let i = 0; i < listaPedidos.length; i++){ //0--1
        if(listaPedidos[i].nome == "café"){
            quantidadeCafe = quantidadeCafe + 1;
        }
    }
    return quantidadeCafe;
}