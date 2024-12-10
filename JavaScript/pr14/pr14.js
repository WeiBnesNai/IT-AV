let ButtonAdd = document.getElementById("ButtonAdd");
let elements = document.getElementById('contt2');
let Name = document.getElementById("Name");
let Price = document.getElementById("Price");
let Kolvo = document.getElementById("Kolvo");
let Art = document.getElementById("Art");
let OP = document.getElementById('OP')
let button = document.getElementById('button');
let ButtonClear = document.getElementById('ButtonClear')

function appendElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('element')
    elements.append(newDiv);
    const TxT = document.createElement('h1');
    TxT.innerHTML = Name.value
    newDiv.append(TxT)
    TxT.classList.add('title');
    const price = document.createElement('h3');
    price.innerHTML = 'Цена: ' + Price.value;
    newDiv.append(price)
    price.classList.add('price');
    const kolvo = document.createElement('h3');
    kolvo.innerHTML = 'Количество: ' + Kolvo.value;
    newDiv.append(kolvo)
    kolvo.classList.add('kolvo');
    const art = document.createElement('h3');
    art.innerHTML = 'Артикул: ' + Art.value;
    newDiv.append(art)
    art.classList.add('art');
    const op = document.createElement('h3');
    op.innerHTML = 'Описание: ' + OP.value;
    newDiv.append(op)
    op.classList.add('op');
    const del = document.createElement('button');
    newDiv.append(del)
    del.innerHTML = 'Удалить'
    del.classList.add('del')
    Name.value =''
    Price.value =''
    Kolvo.value =''
    Art.value =''
    OP.value =''

    function delet() {
        TxT.remove();
        price.remove();
        kolvo.remove();
        art.remove();
        op.remove();
        newDiv.remove();
    }
    del.addEventListener('click', delet)
}
function deleteA() {
    Name.value =''
    Price.value =''
    Kolvo.value =''
    Art.value =''
    OP.value =''
}

ButtonAdd.addEventListener('click', appendElement);
ButtonClear.addEventListener('click', deleteA)

