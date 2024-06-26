function getAgentUUID(agentName) {
    const agentUUIDs = {
        "gekko": "e370fa57-4757-3604-3648-499e1f642d3f",
        "fade": "dade69b4-4f5a-8528-247b-219e5a1facd6",
        "breach": "5f8d3a7f-467b-97f3-062c-13acf203c006",
        "deadlock": "cc8b64c8-4b25-4ff9-6e7f-37b4da43d235",
        "raze": "f94c3b30-42be-e959-889c-5aa313dba261",
        "chamber": "22697a3d-45bf-8dd7-4fec-84a9e28c69d7",
        "kayo": "601dbbe7-43ce-be57-2a40-4abd24953621",
        "skye": "6f2a04ca-43e0-be17-7f36-b3908627744d",
        "cypher": "117ed9e3-49f3-6512-3ccf-0cada7e3823b",
        "sova": "320b2a48-4d9b-a075-30f1-1f93a9b638fa",
        "killjoy": "1e58de9c-4950-5125-93e9-a0aee9f98746",
        "harbor": "95b78ed7-4637-86d9-7e41-71ba8c293152",
        "viper": "707eab51-4836-f488-046a-cda6bf494859",
        "phoenix": "eb93336a-449b-9c1b-0a54-a891f7921d69",
        "astra": "41fb69c1-4189-7b37-f117-bcaf1e96f1bf",
        "brimstone": "9f0d8ba9-4140-b941-57d3-a7ad57c6b417",
        "iso": "0e38b510-41a8-5780-5e8f-568b2a4f2d6c",
        "clove": "1dbf2edd-4729-0984-3115-daa5eed44993",
        "neon": "bb2a4828-46eb-8cd1-e765-15848195d751",
        "yoru": "7f94d92c-4234-0a36-9646-3a87eb8b5c89",
        "sage": "569fdd95-4d10-43ab-ca70-79becc718b46",
        "reyna": "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc",
        "omen": "8e253930-4c05-31dd-1b6c-968525494517",
        "jett": "add6443a-41bd-e414-f6ad-e58d267f4e95"
    };

    const lowercaseName = agentName.toLowerCase();
    return agentUUIDs[lowercaseName];
}


const form = document.querySelector('form');
form.addEventListener('submit', search);

function search(event) {
    event.preventDefault();
    const agent_input = document.querySelector('#agent');
    const agent_value = encodeURIComponent(agent_input.value);
    console.log('Eseguo ricerca: ' + agent_value);

    const agent_uuid = getAgentUUID(agent_value);

    const rest_url = 'https://valorant-api.com/v1/agents/' + agent_uuid;
    console.log('URL: ' + rest_url);
    fetch(rest_url).then(onResponse).then(onJson);
}

function onResponse(response) {
    if (!response.ok) {
        throw new Error('errore');
    }
    return response.json(); 
}

function onJson(json) {
    console.log(json);

    const agent = document.querySelector('#image-container');
    const urlimg = json.data.fullPortrait;
    const ImmagineAgente = document.createElement('img');
    ImmagineAgente.src = urlimg;
    agent.appendChild(ImmagineAgente);
    ImmagineAgente.classList.add('AgenteImmagine');
}