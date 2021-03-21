let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let secs = document.getElementById("seconds");

let showCurrentTime = function(){
    let CurrentTime = new Date();
    hrs.innerHTML = CurrentTime.getHours();
    mins.innerHTML = CurrentTime.getMinutes();
    secs.innerHTML = CurrentTime.getSeconds();
    let meridian = document.getElementById("med");

    /*AM or PM*/
    if (hrs <= 12) {
        meridian.innerHTML = "AM";
    } else {
        meridian.innerHTML = "PM";
    } 
    setInterval(showCurrentTime,1000);
};

showCurrentTime();

