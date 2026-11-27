function calculerMoyenne(notes){
    let somme = 0;
    for(let j=0;j<notes.length;j++){
        somme+=notes[j];
    }
    return somme / notes.length;
}
let groupeA = [12, 14, 16] ;
let groupeB = [10, 18, 11, 13];

console.log("le moyenne generale de groupe A est :",calculerMoyenne(groupeA));
console.log("le moyenne generale de groupe B est :",calculerMoyenne(groupeB));