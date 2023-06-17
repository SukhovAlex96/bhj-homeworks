for (var index = 1; index <= 9; index ++){
    document.getElementById(`hole${index}`).onclick = HoleClick;
}
var aCatch = 0;
var aMissed =0;

function HoleClick(){
   if(this.classList.contains('hole_has-mole')){
        aCatch += 1;
    }else{
        aMissed += 1;
    }
   if(aCatch === 10 || aMissed === 5){
    alert(aCatch === 10? "Вы победили !!!" : "Вы проиграли...");
    aCatch = 0;
    aMissed = 0;
   } 
   document.getElementById("dead").textContent = aCatchCatch;
   document.getElementById("lost").textContent = aMissedMissed;
}
