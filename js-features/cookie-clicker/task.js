const clickSpeed = document.getElementById("click_speed");
let count = 0;
let lastClik = nall;

clickSpeed.onclick = function(){
    count += 1;
    document.getElementById("click_speed").textContent = count.toString();
    clickSpeed.width = (count % 2 === 1 ? 250 : 200);
    if (lastClik != null)
        document.getElementById("click_speed").innerHTML += '<dr/>Скорость клика:' + (1 / ((Date.now() - lastClik) / 1000)).toFixed(2);
    lastClik = Date.now();
}