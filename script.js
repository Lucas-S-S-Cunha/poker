let baralho = []
const nypes = ["Espadas", "Ouros", "Copas", "Paus"]
const numbers = ["1","2","3","4","5","6","7","8","9","10","J","Q","K","A"]
const howManyPlayers = 4

class card {
    constructor(number, nype) {
        this.number = number
        this.nype = nype
        
    }
    toString() {
        return `${this.number} de ${this.nype}`
    }    
}

function criarBaralho() {

    for(let i = 0; i < nypes.length; i++){
        for(let j = 0; j < numbers.length; j++){
            baralho.push( new card(numbers[j], nypes[i]))
        }

    }
}
criarBaralho()


for(let j = 0;j < howManyPlayers; j++){
    function cardSort(x) { // Aonde randomicamente sao escolhidas as cartas; x = quantidade de cartas

        let cartas = []

        for (let i = 0; i < x; i++) {
            const index = Math.floor(Math.random() * baralho.length)
            cartas.push(baralho[index])
            baralho.splice(index, 1) 
        }


        return cartas
    }

        let myCard = cardSort(2)
        console.log(`Mao ${j+1} tem:`, myCard)

}


console.log(baralho)