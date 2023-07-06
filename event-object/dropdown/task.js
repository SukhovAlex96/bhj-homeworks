var btnElem = document.getElementsByClassName("dropdown__value");

for(var i = 0; i < btnElem.length; i++){
    btnElem[i].onclick = function(){
        var oList = this.closest(".dropdown");
        oList.querySelector(".dropdown__list").classList.add("dropdown__list_active");
    };
}

var linkElem = document.getElementsByClassName("dropdown__list");

for(let i = 0; i < linkElem.length; i ++){
    linkElem[i].onclick = function(){
        var oList = this.closest(".dropdown");
        oList.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
        oList.querySelector(".dropdown__value").textContent = this.textContent;
        return false;
    };
}