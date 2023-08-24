const api_key = 'f19ccc5cca758b122d018e26a07d9089'

async function getCordenates(city){
    const request = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`);
    const data = await request.json();
    const cordenates = [data[0].lat, data[0].lon]
    return cordenates;
};

async function getWeather(lat, lon){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
    const data = await request.json();
    return data;
}

module.exports = {
    getCordenates,
    getWeather
}