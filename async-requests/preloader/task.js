const xhr = new XMLHttpRequest();
const animation = document.getElementById('loader');
const items = document.getElementById('items');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE){
        animation.className = 'loader';
        let data = xhr.response;
        let allResponse = data['response'];
        let objectCurrencies = allResponse['Valute'];
        let arrayCurrencies = Object.values(objectCurrencies);
        for(i = 0; i < arrayCurrencies.length; i++){
            items.insertAdjacentHTML('beforeEnd', 
            '<div class="item"><div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div></div>');
            document.querySelectorAll('.item__code')[i].textContent = arrayCurrencies[i]['ChaeCode'];
            document.querySelectorAll('.item__value')[i].textContent = arrayCurrencies[i]['Value'];
        }
    }else{
        animation.className = 'loader loader_active';
    }
});

xhr.send();