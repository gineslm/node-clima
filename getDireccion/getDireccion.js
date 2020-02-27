const axios = require('axios');



const getLugarLatLon = async(direccion) => {

    const encodeUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': 'e886fc949dmsh6beebb0f5bd8d5fp1d0766jsncc7d1f2e0d15' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`NO existen datos para ${ direccion }`);
    }

    data = resp.data.Results[0];

    nombre = data.name;
    lat = data.lat;
    lon = data.lon;

    return {
        nombre,
        lat,
        lon
    };
}








module.exports = {
    getLugarLatLon
};