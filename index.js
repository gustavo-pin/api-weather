const { getCordenates, getWeather } = require("./src/request/httpRequests");
const { getCityName } = require("./src/request/requestData");

async function main(){
    const city = await getCityName();

    const geocoder = await getCordenates(city);
    const lat = geocoder[0];
    const lon = geocoder[1];
    
    const weather = await getWeather(lat, lon);

    return weather;
};

main().then(result => {
    console.log(result)
}).catch((error)=>{
    console.error('ERROR: ', error)
});