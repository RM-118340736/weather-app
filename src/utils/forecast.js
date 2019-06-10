const request = require("request")
const forecast = (latitude, longitude, callback) => {

const url = "https://api.darksky.net/forecast/35d70d5cb44d071494aa5b259b482f59/" + latitude + "," + longitude + "?units=si"

request({ url, json: true}, (error, {body}) => {
    if (error) {
        callback("Unable to connect to weather service.", undefined)
    }
    else if(body.error){
        callback("Unable to find location", undefined)
    }
    else{
    callback(undefined, body.daily.data[0].summary + "It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + " chance of rain. The temperature high for the day is " + body.daily.data[0].temperatureMax + " The temperature low for the day is " + body.daily.data[0].temperatureMin)
    }
})
}

module.exports = forecast