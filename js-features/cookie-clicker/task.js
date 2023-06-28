const cookie = document.getElementById("cookie");
let clickPress = 0;

cookie.onclick = function() {
    clickPress += 1;
    document.getElementById("clicker__counter").textContent = clickPress.toString();
    cookie.width = (clickPress % 2 === 1 ? 200 : 150);
}