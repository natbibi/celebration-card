const { getPhotos } = require("./api");

function init() {
    const form = document.getElementById('form-id');
    form.addEventListener('submit', e => { generatorCard(e) })
}

init()
getPhotos()

function generatorCard(e) {
    e.preventDefault();
    console.log(e)
    let greeting = e.target[0].value
    let event = e.target[1].value
    let message = e.target[2].value
    // window.location.replace("card.html");
    document.getElementById('form-id').remove()

    // let heading = document.createElement('H1');
    // heading.innerHTML = greeting
    // // document.body.append(heading).appendChild('hello')

    // let p = document.createElement("P");
    // p.appendChild(greeting);
    // document.querySelector('body').appendChild(p);

    // let test = document.getElementsByTagName('h1')
    // console.log(test)

    let para = document.createElement("H1");
    para.innerText = `${greeting}`;
    document.body.appendChild(para);

    let para2 = document.createElement("H2");
    para2.innerText = `${event}`;
    document.body.appendChild(para2);

    let para3 = document.createElement("P");
    para3.innerText = `${message}`;
    document.body.appendChild(para3);

    let photos = getPhotos().then(JSON)

    // console.log(photos)
    // // document.getElementById('card-item').style.backgroundImage = 'url(photos)';
    // let imageElement = document.createElement('img');
    // imageElement.src = photos['urls']['raw'];
    // document.body.append(imageElement);


}