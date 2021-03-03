(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const helpers = require('./index.js');

async function getPhotos() {

    try {
        const url = `https://api.unsplash.com/photos/random/?client_id=hKtmqSF91g49p1JZAs_O8PhAhNb-d3FHpQ3rqBQPFAU`
        const response = await fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {
            let item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `<img class="beach-image" src="${response.url}" alt="beach image"/>`
            document.body.appendChild(item);
        })
    }


    // const data = await response.json()
    // // renderPublicRepoCount(data)
    // // console.log(data['urls']['raw'])

    // let objectURL = URL.createObjectURL(data);
    // let image = document.createElement('img');
    // image.src = objectURL;
    // document.body.appendChild(image);


    catch (err) {
        renderError(err)
    }


};

// console.log(photos)
// // document.getElementById('card-item').style.backgroundImage = 'url(photos)';
// let imageElement = document.createElement('img');
// imageElement.src = photos['urls']['raw'];
// document.body.append(imageElement);


module.exports = { getPhotos }

function renderError(err) {
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    error.onclick = closeError;
    document.querySelector('header').appendChild(error);
}

function closeError() {
    const error = document.querySelector('.error');
    error.remove();
}
},{"./index.js":2}],2:[function(require,module,exports){
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
},{"./api":1}]},{},[2]);
