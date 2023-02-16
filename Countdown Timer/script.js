let drem = document.getElementById('drem')
let deadline = new Date("April, 2023, 15:26:25").getTime()
let x = setInterval(function(){
    let now = new Date().getTime()
    let time = deadline - now;
    let days = Math.floor(time/(1000*60*60*24))
    let hours = Math.floor((time%(1000*60*60*24))/(1000*60*60))
    let minutes = Math.floor((time%(1000*60*60))/(1000*60))
    let seconds = Math.floor((time%(1000*60))/1000)
    drem.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
    console.log(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ')
     if(time<0){
        clearInterval(x)
        drem.innerHTML= "Time is Up!"
     }
}, 1000)