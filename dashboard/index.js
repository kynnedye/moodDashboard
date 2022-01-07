const angryBtn = document.getElementById("angry")
const happyBtn = document.getElementById("happy")
const hopefulBtn = document.getElementById("hopeful")
const sadBtn = document.getElementById("sad")
const sereneBtn = document.getElementById("serene")
const excitedBtn = document.getElementById("excited")
const focusBtn = document.getElementById("focus")
const divContainer = document.getElementById("container")
const container2 = document.getElementById("container-2")
const timeDisplay = document.getElementById("time")
const misc = document.getElementById("misc")
const startTime = document.getElementById("start-time")

const angry = [
     
       
       "https://images.unsplash.com/photo-1622565838335-94486df09d92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
       
       "https://images.unsplash.com/photo-1585468274952-66591eb14165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
       "https://images.unsplash.com/photo-1569241095162-e3b9a583b9d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
       "https://images.unsplash.com/photo-1512560756104-e2312890a033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2061&q=80",
       "https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
]
const happy = [
    "https://images.unsplash.com/photo-1543613949-95cd1b38a10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541101232843-4bec8f5de0f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1535222919969-4548310d5955?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1526157485112-5fb340a60461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1573868507558-0783d1fe3a80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
]
const focused =[
    "https://images.unsplash.com/photo-1517926112623-f32a800790d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1571790491176-918bb99ea860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1609619385076-36a873425636?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
]
const serene = [
    "https://images.unsplash.com/photo-1463760959829-d829ea46e191?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1560297971-f26c8ba85802?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1545348889-fe05cc72d6b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2073&q=80"
]
const hopeful = [
    
    "https://images.unsplash.com/photo-1484233693062-745ef10139bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80",
    "https://images.unsplash.com/photo-1496478981722-3ae516118a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2066&q=80",
    "https://images.unsplash.com/photo-1433878455169-4698e60005b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
]
const sad = [
    "https://images.unsplash.com/photo-1525120334885-38cc03a6ec77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1597176116047-876a32798fcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1455380579765-810023662ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1568432498526-1bba7a20b166?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2073&q=80",
    "https://images.unsplash.com/photo-1527193874670-bf698eaa3d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
]
const excited = [
    "https://images.unsplash.com/photo-1582405255296-e85bd3a7944f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2128&q=80",
    "https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1534828894924-78721b6c66ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1561174356-638d86f24f04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1625&q=80",
    "https://images.unsplash.com/photo-1502137840985-4ec07e8568bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
    
]
angryBtn.addEventListener("click", function(){
    getPicture(angry)
})
happyBtn.addEventListener("click", function(){
    getPicture(happy)
})
focusBtn.addEventListener("click", function(){
    getPicture(focused)
    fetch("https://api.nasa.gov/planetary/apod?api_key=4CRW436uGQq39xBhsfRKUbOzC6PX4ealUtxyCD0D")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            console.log(data.url)
            misc.innerHTML = `
            <div class="astronomy>
                <h3 class ="nasa"> Check out Nasa's latest finding</h3>
                <img class="nasa-url" src="${data.url}">
                <p class ="space-info">${data.explanation}</p>
            
            </div>"`
        })
})
sereneBtn.addEventListener("click", function(){
    misc.innerHTML = `
    <div class = "meditation">
        <p id ="timer">05:00</p>
        <button onclick ="countDown()" id ="start-time">Start meditation</button>
    </div>`

    getPicture(serene)
})
sadBtn.addEventListener("click", function(){
    getPicture(sad)
})
hopefulBtn.addEventListener("click", function(){
    fetch("https://quotes.rest/qod?category=love&language=en")
        .then(res => res.json())
        .then( data => {
            console.log(data)
            misc.innerHTML = `<div id = "quote">
           
            <blockquote >
                <p>${data.contents.quotes[0].quote}</p>
            </blockquote>
            <cite>-${data.contents.quotes[0].author}</cite>
            <a href ="${data.baseurl}">${data.baseurl}</a>
        
        </div>`
        })
    getPicture(hopeful)
})
excitedBtn.addEventListener("click", function(){
    getPicture(excited)
})
 function countDown(){
    let seconds = 0;
let minutes = 5;


//Define vars to hold "display" value
let displaySeconds = 0;


//Define var to hold setInterval() function
let interval = null;

const timer = document.getElementById("timer")



//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds--;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes--;

        if(minutes / 60 === 1){
            minutes = 0;
           
        }

    }
    if (seconds< 0){
        seconds=59
        minutes--
    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if (minutes <= 0 & seconds <=0){
        clearInterval(stop)
        minutes = 5
        seconds = 0
        displayMinutes = 05
        audio.pause()
    }
    

    //Display updated time values to user
    timer.innerHTML =  displayMinutes + ":" + displaySeconds;

}
 let stop = setInterval(stopWatch, 1000)

 var audio = new Audio("meditationmus.mp3");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

}



function getPicture(arr){
    let randomNumber = Math.floor (Math.random() * 5) 
    let randomPicture = arr[randomNumber]
    console.log(randomPicture)
    document.body.style.backgroundImage = `url(${randomPicture})`
    divContainer.style.display = "none"
    

}
function time(){
    let newTime = new Date()
    
    timeDisplay.textContent = newTime.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(time,1000)

var now = new Date();
var night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day, ...
    0, 0, 0 // ...at 00:00:00 hours
);
var msTillMidnight = night.getTime() - now.getTime();
setTimeout('document.location.refresh()', msTillMidnight);


