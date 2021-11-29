const govApi = 'https://data.cityofnewyork.us/resource/drss-6xix.json'

async function getData() {
    const response = await fetch(govApi);
    const data = await response.json();
    console.log(data);
    console.log(data[5].ipv_dirs_19);
    document.getElementById('total').innerHTML = data[5].ipv_dirs_19;

};

getData();