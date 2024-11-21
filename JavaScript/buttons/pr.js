let button = document.getElementById('button')
let body = document.body;
button.addEventListener('click', changecolor)
function changecolor() {
    if (body.style.backgroundColor == 'green') {
        body.style.backgroundColor = "blue";
    }
    else {
        body.style.backgroundColor = "green";
    }    
}

