const poquer = (() => {
    let cartasDescartadas = [];
    
    iniciaRodada();

    function iniciaRodada() {
        let mesaPoquer = mesa();

        cartasDescartadas = [];
        mesaPoquer.montarBaralho(1, ["JOKER"]);
        mesaPoquer.criarJogadores(4);
        mesaPoquer.embaralharCartas(mesaPoquer.verificarBaralho());
        mesaPoquer.darCartasInicio(2);
        console.log("Baralho:", mesaPoquer.verificarBaralho());
        console.log("Jogadores:", mesaPoquer.verificarJogadores());
    }

})();