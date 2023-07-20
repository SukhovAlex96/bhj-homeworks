var menuElem = document.getElementsByClassName("font-size");

for(var i = 0; i < menuElem.length; i++) {
    menuElem[i].onclick = function(){        
        
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        this.classList.add("font-size_active");
        
        let book = document.querySelector(".book");
    
        if (this.classList.contains("font-size_small")) {
            book.classList.add("font-size_small");
            if(book.classList.contains("font-size_big")) book.classList.remove("font-size_big");
        }
    
        if (this.classList.contains("font-size_big")) {
            book.classList.add("font-size_big");
            if(book.classList.contains("font-size_small")) book.classList.remove("font-size_small");
        }
    
        if (!this.classList.contains("font-size_small") && !this.classList.contains("font-size_big")) {
            if(book.classList.contains("font-size_big")) book.classList.remove("font-size_big");
            if(book.classList.contains("font-size_small")) book.classList.remove("font-size_small");
        }
    
        return false;
    };
}
