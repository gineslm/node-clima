const { getLugarLatLon } = require('./getDireccion/getDireccion');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    try {

        const cordenadas = await getLugarLatLon(direccion).then();
        console.log(cordenadas);
        const clima = await getClima(cordenadas.lat, cordenadas.lon).then();
        console.log(clima);


    } catch (error) {
        console.log('No se pudo determinae el clima.', error);
    }




};


getInfo(argv.direccion).then();


/* 

getLugarLatLon(argv.direccion).then(resp => {
    const lat = resp.lat;
    const lon = resp.lon;
});



getClima(lat, lon).then(
        resp => {
            console.log(resp);
        })
    .catch(console.log);
 */





/* "Results": [
    {
        "name": "Madrid, Spain",
        "type": "city",
        "c": "ES",
        "zmw": "00000.61.08223",
        "tz": "Europe/Madrid",
        "tzs": "CET",
        "l": "/q/zmw:00000.61.08223",
        "ll": "40.419998 -3.700000",
        "lat": "40.419998",
        "lon": "-3.700000"
    }, */