const rd = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getCityName(){
    return new Promise((resolve, reject)=>{
        rd.question('What is your city? ', (city)=>{
            rd.close();
            resolve(city);
        });
    });
};

module.exports = {
    getCityName
}