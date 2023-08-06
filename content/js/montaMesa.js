const mesa = (() => {
    const baralhoTradicional = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "JOKER"];
    const naipes = ["P", "C", "E", "O"];
    let jogadores = [];
    let baralhoJogo = [];
    
    function montarBaralho(numeroBaralhos, cartasExcluidas, cartasBaralho = baralhoTradicional) {
        cartasExcluidas.map(carta => {
            let posicaoCarta = cartasBaralho.indexOf(carta);
            cartasBaralho.splice(posicaoCarta, 1);
        });
    
        for(let x = 0; x < numeroBaralhos; x++) {
            cartasBaralho.map(carta => {
                naipes.map(naipe => {
                    if(carta == "JOKER")
                        baralhoJogo.push(carta)
                    else
                        baralhoJogo.push(carta + "-" + naipe); 
                });
            });
        }

        return baralhoJogo;
    }
    
    function criarJogadores(numeroJogadores) {
        jogadores = [];
        for(let x = 0; x < numeroJogadores; x++){
            let jogador = {
                nome: "Jogador - " + (x+1),
                cartas: []
            }
            jogadores.push(jogador);
        }
    }
    
    function embaralharCartas(cartas) {
        for (let i = cartas.length - 1; i > 0; i--) {
          const sorteador = Math.floor(Math.random() * (i + 1));
          [cartas[i], cartas[sorteador]] = [cartas[sorteador], cartas[i]];
        }
    }
    
    function darCartasInicio(numeroCartas) {
        jogadores.map(jogador => {
            for(let x = 0; x < numeroCartas; x++) {
                jogador.cartas.push(retirarCartaBaralho());
            }
        });
    }

    function retirarCartaBaralho() {
        let carta = baralhoJogo[0];
        baralhoJogo.splice(0, 1);
        return carta;
    }

    function darCartaJogador(jogador, carta) {
        jogadores[jogador].cartas.push(carta);
    }
    
    function retirarCartaJogador(jogador, cartaRetirada) {
            let posicaoCarta = jogadores[jogador].cartas.indexOf(cartaRetirada);
            jogadores[jogador].cartas.splice(posicaoCarta, 1);
            console.log("Carta retirada -", cartaRetirada);
    }
    
    function verificarBaralho() {
        return baralhoJogo;
    }

    function verificarJogadores() {
        return jogadores;
    }

    return {
        montarBaralho: montarBaralho,
        criarJogadores: criarJogadores,
        embaralharCartas: embaralharCartas,
        darCartasInicio: darCartasInicio,
        retirarCartaBaralho: retirarCartaBaralho,
        darCartaJogador: darCartaJogador,
        retirarCartaJogador: retirarCartaJogador,
        verificarBaralho: verificarBaralho,
        verificarJogadores: verificarJogadores
    }
});