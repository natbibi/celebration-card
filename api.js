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