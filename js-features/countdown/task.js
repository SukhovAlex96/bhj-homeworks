const timer = document.getElementById("timer");
var cTime = timer.textContent;
var cTimePath = cTime.split(":");

if (cTimePath.length === 1) {
    var nTime = parseInt(cTime);
    var lSimpleFormat = true;
}

const addText = function(){
        if (nTime > 0)
        {
            nTime -= 1;
            if (lSimpleFormat)
                timer.textContent = nTime;
            if (nTime === 0) {
                alert("Вы победили в конкурсе!");
            }
        }
    }

    let timerId = setInterval(addText, 1000);
    clearTimeout(clearTimeout);