import assert from 'node:assert'
import {contabilizarQuantidadeDeCafe, contabilizarQuantidadeDeItems} from '../src/starbucks.js'

describe('Testes para gestão de cafeteria', function(){
    it('TC 1 - Ao menos 1 café na lista', function(){
        // Arrange -> Organizar ou Arranjar
        // Entrada da função
        const listaPedidos = [
            {nome: "café", valor: 4.00}, 
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00}
        ]
        // Saída da função
        const retornoEsperado = 1

        // Act -> Ação
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert -> Asserção 
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 2 - Não ter nenhum café na lista', function(){
        // Arrange -> Organizar ou Arranjar
        // Entrada da função
        const listaPedidos = [
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00}
        ]
        // Saída da função
        const retornoEsperado = 0

        // Act -> Ação
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert -> Asserção 
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 3 - Ter 2 ou mais', function(){
        // Arrange -> Organizar ou Arranjar
        // Entrada da função
        const listaPedidos = [
            {nome: "café", valor: 4.00}, 
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00},
            {nome: "café", valor: 4.00}, 
        ]
        // Saída da função
        const retornoEsperado = 2

        // Act -> Ação
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert -> Asserção 
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 4 - Retornar uma lista de pedidos vazia', function(){
        // Arrange -> Organizar ou Arranjar
        // Entrada da função
        const listaPedidos = [ ]
        // Saída da função
        const retornoEsperado = 0

        // Act -> Ação
        const quantidadeDeCafes = contabilizarQuantidadeDeCafe(listaPedidos)

        // Assert -> Asserção 
        assert.equal(retornoEsperado, quantidadeDeCafes)
    })

    it('TC 5 - Filtrar por um item específico da lista', function(){
        //Arrange
        // Entrada da função
        const listaPedidos = [
            {nome: "café", valor: 4.00}, 
            {nome: "bolo de cenoura", valor: 12.00},
            {nome: "café com leite", valor: 5.00},
            {nome: "café", valor: 4.00}, 
        ]
        const itemPesquisado = "bolo de cenoura"
        const resultadoEsperado = 1

        //Act
        const quantidadeDeItems = contabilizarQuantidadeDeItems(itemPesquisado, listaPedidos)

        // Assert -> Asserção 
        assert.equal(resultadoEsperado, quantidadeDeItems)
    })

})