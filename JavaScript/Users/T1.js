let userList = document.getElementById('users-list');

let blocks = [];

async function getTitles() {

    let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    blocks = response.data
    showBlocks()
}

function showBlocks() {
    for (let user of blocks) {

        let Block = document.createElement('div');

        let title = document.createElement('p');

        let body = document.createElement('p')

        Block.classList.add('Blocksc');
title.innerHTML =  `<b>Title: </b> ${user.title} `;
        body.innerHTML =  `<b>Body: </b> ${user.body} `;


        usersList.append(Block);
        Block.append(title, body);
    }
}
getTitles();