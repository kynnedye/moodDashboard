const weather = document.getElementById("weather")
const crypto = document.getElementById("crypto")
const cryptoTop = document.getElementById("crypto-top")


navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=58a2f6e70166d3374d834851ba8e4752`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p>${Math.round(data.main.temp)}º</p>
                <p>${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
       if (!res.ok){
           throw Error("Something went wrong")
       }
       return res.json()

    })
    .then(data => {
        console.log(data)
        cryptoTop.innerHTML = `<img src = ${data.image.small}
        <span>${data.name}`

        crypto.innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>`
    })




    