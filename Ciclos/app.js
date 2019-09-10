suma();

function suma() {
    let y = 0;
    for (let i = 0; i <= 10; i++) {
        y = y + i;
        let newli = document.createElement('li');
        newli.setAttribute("id", `listaN${i}`);
        let newContent = document.createTextNode(y);
        newli.appendChild(newContent);
        let listadesordenada = document.getElementById('listanumerica');
        listadesordenada.appendChild(newli);
        newli.setAttribute("class", `list-group-item`);
    }
}