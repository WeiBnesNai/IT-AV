let pole = document.getElementById("pole");
let clear = document.getElementById("clear");
function appendValue(value) {
    pole.value = pole.value + value
}
function complete() {
    if (pole.value == '') {
        pole.value = ''
    } else {
        try {
            pole.value = eval(pole.value);
        }
        catch(e) {
            pole.value = 'Ошибка!!!'
        }
    }
}
clear.addEventListener('click', clears)
function clears(){
    pole.value = ''
}

function getKey(event) {
    // let keys = [ '1', '2', '3', '4', '5' ]
    // if (keys.includes(event.key) == false) {
    //     event.preventDefault();
    // }

    // if (event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4') {
    //
    // }
    // else {
    //     event.preventDefault()
    // }

    if (event.key == 'a') {
        event.preventDefault()
    }
    if (event.key == 'b'){
        event.preventDefault()
    }
    if (event.key == 'c'){
        event.preventDefault()
    }
    if (event.key == 'd'){
        event.preventDefault()
    }if (event.key == 'e'){
        event.preventDefault()
    }if (event.key == 'f'){
        event.preventDefault()
    }if (event.key == 'g'){
        event.preventDefault()
    }if (event.key == 'i'){
        event.preventDefault()
    }if (event.key == 'j'){
        event.preventDefault()
    }if (event.key == 'k'){
        event.preventDefault()
    }if (event.key == 'l'){
        event.preventDefault()
    }if (event.key == 'm'){
        event.preventDefault()
    }if (event.key == 'n'){
        event.preventDefault()
    }if (event.key == 'o'){
        event.preventDefault()
    }if (event.key == 'p'){
        event.preventDefault()
    }if (event.key == 'q'){
        event.preventDefault()
    }if (event.key == 'r'){
        event.preventDefault()
    }if (event.key == 's'){
        event.preventDefault()
    }if (event.key == 't'){
        event.preventDefault()
    }if (event.key == 'u'){
        event.preventDefault()
    }if (event.key == 'v'){
        event.preventDefault()
    }if (event.key == 'w'){
        event.preventDefault()
    }if (event.key == 'x'){
        event.preventDefault()
    }if (event.key == 'y'){
        event.preventDefault()
    }if (event.key == 'z'){
        event.preventDefault()
    }


}
pole.addEventListener('keypress', getKey)