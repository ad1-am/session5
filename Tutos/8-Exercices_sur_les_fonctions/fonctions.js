function calculerSurface(longueur, largeur){
    return longueur * largeur;
}
function estGrand(surface){
    if(surface>=100){
        return true;
    }
    else{
        return false;
    }
}
let résultat=calculerSurface(12,10);
console.log("la surface d’une pièce de 12 mètres sur 10 mètres est :",résultat);
console.log("la condition de supérieure ou égale à 100 est :",estGrand(résultat));


