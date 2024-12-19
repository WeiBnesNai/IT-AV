let ButtonAdd = document.getElementById("ButtonAdd");
let elements = document.getElementById('contt2');
let Name = document.getElementById("Name");
let Price = document.getElementById("Price");
let Kolvo = document.getElementById("Kolvo");
let Art = document.getElementById("Art");
let OP = document.getElementById('OP')
let button = document.getElementById('button');
let ButtonClear = document.getElementById('ButtonClear')
let an = document.getElementById('an')
let tic = document.getElementById('tic')
let number = 0
let clearAll = document.getElementById('clearAll')
let cont2 = document.getElementById('contt2');
// let TxT = document.getElementsByClassName('TxT')
// let price = document.getElementsByClassName('price')
// let kolvo = document.getElementsByClassName('kolvo')
// let art = document.getElementsByClassName('art')
// let op = document.getElementsByClassName('op')
// let newDiv = document.getElementsByClassName('newDiv')

function delAl() {
    let question = 'Вы точно хотите удалить все товары?'
    const result = confirm(question)
    if (result){
    cont2.innerHTML = ''
    }
    else {

    }

}
clearAll.addEventListener('click', delAl)
function appendElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('element')
    elements.append(newDiv);
    const TxT = document.createElement('h1');
    TxT.classList.add('text')
    TxT.innerHTML = Name.value
    newDiv.append(TxT)
    TxT.classList.add('title');
    const price = document.createElement('h3');
    price.classList.add('text')
    price.innerHTML = 'Цена: ' + Price.value;
    newDiv.append(price)
    price.classList.add('price');
    const kolvo = document.createElement('h3');
    kolvo.classList.add('text')
    kolvo.innerHTML = 'Кол-во: ' + Kolvo.value;
    newDiv.append(kolvo)
    kolvo.classList.add('kolvo');
    const art = document.createElement('h3');
    art.classList.add('text')
    art.innerHTML = 'Артикул: ' + Art.value;
    newDiv.append(art)
    art.classList.add('art');
    const op = document.createElement('h3');
    op.classList.add('text')
    op.innerHTML = 'Описание: ' + OP.value;
    newDiv.append(op)
    op.classList.add('op');
    const del = document.createElement('button');
    newDiv.append(del)
    del.innerHTML = 'Удалить'
    del.classList.add('del')
    if (Name.value =='') {
        let Fall = document.createElement('h3');
        Fall.innerHTML = 'Ошибка, заполните поле "Название"'
        cont2.append(Fall)
        Fall.classList.add('F')
    }
    if (Price.value =='') {
        let Fall = document.createElement('h3');
        Fall.innerHTML = 'Ошибка, заполните поле "Цена"'
        cont2.append(Fall)
        Fall.classList.add('F')
    }
    if (Kolvo.value =='') {
        let Fall = document.createElement('h3');
        Fall.innerHTML = 'Ошибка, заполните поле "Количество"'
        cont2.append(Fall)
        Fall.classList.add('F')
    }
    if (Art.value =='') {
        let Fall = document.createElement('h3');
        Fall.innerHTML = 'Ошибка, заполните поле "Артикул"'
        cont2.append(Fall)
        Fall.classList.add('F')
    }
    if (OP.value =='') {
        let Fall = document.createElement('h3');
        Fall.innerHTML = 'Ошибка, заполните поле "Описание"'
        cont2.append(Fall)
        Fall.classList.add('F')
    }
    Name.value = ''
    Price.value = ''
    Kolvo.value = ''
    Art.value = ''
    OP.value = ''
    number = number+1
    tic.innerHTML = `<span>Добавлено товаров: ${ number }</span>`;



    const an = document.createElement('button');
    newDiv.append(an)
    an.innerHTML = 'Купить:3'
    an.classList.add('an')
    function MEMS() {
        window.location.href = 'https://avatars.mds.yandex.net/i?id=675af6f420e0ec30d66b907088c90dea_l-5878173-images-thumbs&n=13';
    }
    an.addEventListener('click', MEMS)
    function delet() {
        let questionO = ('Вы точно хотите удалить товар: ' + Name.value + '?')  //!
        const resultO = confirm(questionO)
        if (resultO){
            TxT.remove();
            price.remove();
            kolvo.remove();
            art.remove();
            op.remove();
            newDiv.remove();
        }
        else {

        }
        TxT.remove();
        price.remove();
        kolvo.remove();
        art.remove();
        op.remove();
        newDiv.remove();
        number = number-1
        tic.innerHTML = `<span>Добавлено товаров: ${ number }</span>`;
    }
    del.addEventListener('click', delet)}
function deleteA() {
    Name.value =''
    Price.value =''
    Kolvo.value =''
    Art.value =''
    OP.value =''
}


ButtonAdd.addEventListener('click', appendElement);
ButtonClear.addEventListener('click', deleteA)
