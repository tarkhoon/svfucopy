 /* этот код помечает картинки, для удобства разработки */
 /*let i = 1;
 for(let li of carousel.querySelectorAll('li')) {
   li.style.position = 'relative';
   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
   i++;
 }*/

 /* конфигурация *//*
 let width = 130; // ширина картинки
 let count = 3; // видимое количество изображений

 let list = carousel.querySelector('ul');
 let listElems = carousel.querySelectorAll('li');

 let position = 0; // положение ленты прокрутки

 carousel.querySelector('.prev').onclick = function() {
   // сдвиг влево
   position += width * count;
   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
 }

 carousel.querySelector('.next').onclick = function() {
   // сдвиг вправо
   position -= width * count;
   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
 }
*/
 
 let list = carousel.querySelector('ul');
 let position = 0; // положение ленты прокрутки
 let sl10 = document.getElementById('slick-slide10');
 let sl11 = document.getElementById('slick-slide11');
 let sl12 = document.getElementById('slick-slide12');
 let sl13 = document.getElementById('slick-slide13');

    sl10.onclick = click0; //Вызов функции click при наведении

    function click0(){
        sl10.classList.add('slick-active');
        sl11.classList.remove('slick-active');
        sl12.classList.remove('slick-active');
        sl13.classList.remove('slick-active');
        position = 0;
        list.style.marginLeft = position + 'px';
    }

    sl11.onclick = click1; //Вызов функции click при наведении

    function click1(){
        sl11.classList.add('slick-active');
        sl10.classList.remove('slick-active');
        sl12.classList.remove('slick-active');
        sl13.classList.remove('slick-active');
        let elem = document.getElementById('width-carousel');
        let width = elem.offsetWidth;
        position = -width*6;
        list.style.marginLeft = position + 'px';
    }
    sl12.onclick = click2; //Вызов функции click при наведении

    function click2(){
        sl12.classList.add('slick-active');
        sl11.classList.remove('slick-active');
        sl10.classList.remove('slick-active');
        sl13.classList.remove('slick-active');
        let elem = document.getElementById('width-carousel');
        let width = elem.offsetWidth;
        position = -width*12;
        list.style.marginLeft = position + 'px';
    }
    sl13.onclick = click3; //Вызов функции click при наведении

    function click3(){
        sl13.classList.add('slick-active');
        sl11.classList.remove('slick-active');
        sl12.classList.remove('slick-active');
        sl10.classList.remove('slick-active');
        let elem = document.getElementById('width-carousel');
        let width = elem.offsetWidth;
        position = -width*14;
        list.style.marginLeft = position + 'px';
    }