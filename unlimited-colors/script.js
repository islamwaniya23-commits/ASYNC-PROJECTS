//generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';// since color want to change so let
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let interval;

const startChanging = function(){
    if(!interval){
        interval = setInterval(changeBgColor , 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChanging = function(){
    clearInterval(interval);
    interval = null; // no over writing (no memory over utilize)
}

document.querySelector('#start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click', stopChanging);