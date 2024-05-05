let token;

const client_id = "4f9ea3998d244005ae4b56289da1ac4f";
const client_secret = "f1037da3ce7b4434ba73b91a07cbd7f7";


function onJson(json) {
    console.log(json);

    const artistItems = json.artists.items;
    const artist = artistItems[0]; 
    const images = artist.images;
    const urlimg = images[0].url;
    console.log("URL: ", urlimg);
    const artistContainer = document.querySelector('#image-container');
    const artistImage = document.createElement('img');
    artistImage.src = urlimg;
    artistContainer.appendChild(artistImage);
    artistImage.classList.add('ArtistaImmagine');
    
}


function onResponse(response) {
    console.log('Response received');
    return response.json();
}

function search(event) {
    event.preventDefault();

    const artist_input = document.querySelector('#artist');
    const artist_value = encodeURIComponent(artist_input.value);
    console.log('Searching for: ' + artist_value);

    const apiUrl = `https://api.spotify.com/v1/search?q=${artist_value}&type=artist`;
    fetch(apiUrl, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then(onResponse)
        .then(onJson);
}



function onTokenJson(json) {
    token = json.access_token;
}

function onTokenResponse(response) {
    return response.json();
}

fetch("https://accounts.spotify.com/api/token", {
    method: "post",
    body: 'grant_type=client_credentials',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
    }
}).then(onTokenResponse)
    .then(onTokenJson);

const form = document.querySelector('form');
form.addEventListener('submit', search);
