let seekingDate = new Date("Dec 31, 2029 23:59:59").getTime();
console.log(seekingDate);

let counter = setInterval(function(){
    let currentDate = new Date().getTime();
    let diffDate = seekingDate - currentDate;

    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24))
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffDate % (1000 * 60)) / (1000));

    document.querySelector(".days .nom").innerHTML = (days < 100 && days > 10) ? `0${days}`  :
                                                    days < 10 ? `00${days}` : days ;
    document.querySelector(".hours .nom").innerHTML = hours < 10 ? `0${hours}` : hours ;
    document.querySelector(".minutes .nom").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
    document.querySelector(".seconds .nom").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;

    if (diffDate < 0 ){
        clearInterval(counter);
    }
},1000)
