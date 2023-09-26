const poquer = (() => {
    let cartasDescartadas = [];
    let cartasMesa = [];
    let mesaPoquer = mesa();
    let montanteApostas = 0;

    iniciaRodada();
    adicionaCartaMesa();
    adicionaCartaMesa();
    adicionaCartaMesa();
    adicionaCartaMesa();
    adicionaCartaMesa();
    mesaPoquer.atualizaDescarte(cartasDescartadas.length);

    function iniciaRodada() {
        cartasDescartadas = [];
        mesaPoquer.montarBaralho(1, ["JOKER"]);
        mesaPoquer.criarJogadores(4);
        mesaPoquer.embaralharCartas(mesaPoquer.verificarBaralho());
        mesaPoquer.darCartasInicio(2);
        console.log("Jogadores:", mesaPoquer.verificarJogadores());
    }

    function adicionaCartaMesa() {
        let carta = mesaPoquer.retirarCartaBaralho();
        mesaPoquer.atualizaBaralho();
        cartasMesa.push(carta);
        mesaPoquer.atualizaMesa(cartasMesa, `<p style="color: white">O montante atual das apostas é: <b style="font-size: 20px">${montanteApostas}</b></p>`);
    }


})();