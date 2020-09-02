// Système de jeu
// Plus grand plus petit
// De 1 - 10
/**
 * L'ordinateur choisi un chiffre entre 1 et 10
 * Tu dois trouver ce chiffre
 * Si le nombre proposé est inférieur/supérieur au nombre choisi, un message te le dira 
 * tu as trois essais
 * TANT QUE TON NOMBRE D'ESSAIS > 0 la partie continue
 * 
 * Math.floor() // pour avoir la partie entière du nombre aléatoire
 * Math.random() // pour désigné un nombre entre [0-1[
 * Math.random() * (max-min)+min // intervalle personnalisé
 */

// 1- choix CPU
let choixOrdinateur = Math.floor((Math.random()*(10 - 1 +1))+1)

// 2- Nombres d'essais
let vies = 3

// 3- Fonction de comparaison avec la machine
function Comparer (nombre) {
    let choixJoueur = nombre
    let x = choixJoueur * (-1)
    let msg = ""

    if (isNaN(x)) {
        msg = "La proposition n'est pas un nombre"
        console.log(msg)
        return false
    } 
    else {
        if (choixJoueur < choixOrdinateur) {
            msg = "Le nombre proposé est trop petit"
            console.log(msg)
            return -1
        } else if (choixJoueur > choixOrdinateur) {
            msg = "Le nombre proposé est trop grand"
            console.log(msg)
            return -1
        } else {
            msg = "Félicitation vous avez trouvé le nombre choisi" 
            alert(msg)
            return 1
        }
    }
}

/* ***************************************************
MAIN
**************************************************** */ 
let resultat = 0
let tentatives = 2

while(resultat != 1) {
    let choixJoueur = prompt('Proposez un nombre')
    resultat = Comparer(choixJoueur)
    console.log('Vies restantes : '+tentatives)
    if (resultat != 1) {
        if (tentatives > 0) {
            tentatives -= 1
        } else {
            console.log('Vous avez perdu')
            resultat = 1
        }
    } 
    else {
        console.log('Tu Gagnes')
        console.log('Nombre choisi : '+choixOrdinateur)
    }
}

