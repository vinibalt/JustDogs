const changeDog = document.querySelector('#newDogPic');
const url = 'https://api.thedogapi.com/v1/images/search/';

function getDog(url){
    return fetch(url)
    .then(response => response.json())
    .then(res => res.shift().url)
}

const loadImg = async () => {
    const dogPic = document.querySelector('#dogPic');
    dogPic.src = await getDog(url);
}

changeDog.addEventListener('click', loadImg);

loadImg();