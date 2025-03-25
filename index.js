let personagem = "Clank"
let nivel = 6489

switch(true){
    case nivel <= 1000 :
        console.log("O heroí de nome " + personagem + " Está no nivel ferro")
        break

    case nivel >= 1001 && nivel <= 2000:
        console.log("O heroí de nome " + personagem + " Está no nivel bronze")
        break
    
    case nivel >= 2001 && nivel <= 5000:
        console.log("O heroí de nome " + personagem + " Está no nivel prata")
        break

    case nivel >= 5001 && nivel <= 7000:
        console.log("O heroí de nome " + personagem + " Está no nivel ouro")
        break

    case nivel >= 7001 && nivel <= 8000:
        console.log("O heroí de nome " + personagem + " Está no nivel platina")
        break

    case nivel >= 8001 && nivel <= 9000:
        console.log("O heroí de nome " + personagem + " Está no nivel ascendente")
        break

    case nivel >= 9001 && nivel <= 10000:
        console.log("O heroí de nome " + personagem + " Está no nivel imortal")
        break

    case nivel >= 10000:
        console.log("O heroí de nome " + personagem + " Está no nivel radiante")
        break
}

    
