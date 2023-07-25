const tabs =document.querySelectorAll('.tab');
tabs.forEach(clickTab =>{
    clickTab.addEventListener('click',()=>{
        tabs.forEach(tab=> {
            tab.classList.remove('active');
        });
        clickTab.classList.add('active');
        const clickTabBGcolor=
        getComputedStyle(clickTab).getPropertyValue('color');
        console.log(clickTabBGcolor);
        document.body.style.background=clickTabBGcolor;
    });
});