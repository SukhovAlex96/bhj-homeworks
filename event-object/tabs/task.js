const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));

for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click',(event) =>{

        let tabsChildren = event.target.parentElement.children;
        for(let j = 0; j < tabsChildren.length; j++){
            tabsChildren[j].classList.remove('tab_active');
        }
        tabs[i].classList.add('tab_active');

        let tabsContentChildren = event.target.parentElement.nextElementSibling.children;
        for(let t = 0; t < tabsContentChildren.length; t++){
            tabsContentChildren[t].classList.remove('tab__content_active');
        }
        tabsContent[i].classList.add('tab__content_active');
    });
}