let token;

const client_id = "4f9ea3998d244005ae4b56289da1ac4f";
const client_secret = "f1037da3ce7b4434ba73b91a07cbd7f7";

function getArtistUUID(artistName) {
    const artistUUIDs = {
        "pitbull": "0TnOYISbd1XYRBk9myaseg",
        "theweeknd": "1Xyo4u8uXC1ZmMpatF05PJ",
        "bts": "3Nrfpe0tUJi4K4DXYWgMUX",
    };

    const lowercaseName = artistName.toLowerCase();
    return artistUUIDs[lowercaseName];
}

function onJson(json) {
    console.log(json);

    const images = json.images;
    const urlimg = images[0].url;
    console.log("URL: ", urlimg);

    const artist = document.querySelector('#image-container');
    const ImmagineArtista = document.createElement('img');
    ImmagineArtista.src = urlimg;
    artist.appendChild(ImmagineArtista);
    ImmagineArtista.classList.add('ArtistaImmagine');
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

    const artist_uuid = getArtistUUID(artist_value);
    const rest_url = 'https://api.spotify.com/v1/artists/' + artist_uuid;

    fetch(rest_url, {
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