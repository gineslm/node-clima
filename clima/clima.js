const axios = require('axios');


/* 
apikey = 4a8fb1fe54ae77ebb0e503c0d9da9bc7 

url = api.openweathermap.org/data/2.5/weather?lat=35&lon=139

*/


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4a8fb1fe54ae77ebb0e503c0d9da9bc7&units=metric`);

    return resp.data;


}


module.exports = {
    getClima
};