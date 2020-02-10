timeInDialect();
displayWelcomeMsg();

setInterval(timeInDialect,1000);
setInterval(displayWelcomeMsg,60000);

function displayWelcomeMsg() {
    var today = new Date();
    var timeNow = today.getHours();
    var element = document.getElementById('titleTop');

    if (timeNow == 12) {
        element.innerHTML = "Ä Guete!";    
    } 
    else if (timeNow < 12) {
        element.innerHTML = "Guete Morge!";
    }
    else if (timeNow > 12 && timeNow < 18) {
        element.innerHTML = "Guete Nami!";
    }
    else {
        element.innerHTML = "Guete Abee!";
    }
}

function displayTime() {
    var today = new Date();
    dateNow = today.getDate();
    monthNow = today.getMonth();
    hoursNow = today.getHours();
    minutesNow = today.getMinutes();
    secondsNow = today.getSeconds();

    document.getElementById('clockP').innerHTML = dateNow +" - "+ hoursNow +":"+ minutesNow +":"+ secondsNow;
}

!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');

function checkHour(a){
    if (a >= 13 && a<23){
        a = a - 12;
    }
    else if (a>=23){
        if (a==23){
            a = 11;
        }
        else if (a==24){
            a = 12;
        }
    }
    return a;
}

function timeInDialect() {
    var numberName = new Map();
    var names = ['Punkt','eis','zwöi','drüü','vier','füef','sächs','sibe','acht','nüün','zäh','elf','zwölf','drizäh','vierzäh','viertu','sächzäh','sibzäh','achtzäh','nüünzäh','zwänzg','einezwänzg','zwöiezwänzg','drüezwänzg','vierezwänzg',
    'füfezwänzg','sächsezwänzg','sibenezwänzg','achtezwänzg','nüünezwänzg','haubi']

    var time = new Date();

    var hourNumber = time.getHours();
    var minuteNumber = time.getMinutes();

    hourNumber = checkHour(hourNumber);

    hour = names[hourNumber]

    if (minuteNumber<30 && minuteNumber!=0){
        minute = names[minuteNumber]
        before = ' ab ';
    }
    else if (minuteNumber>30){
        minute = names[60 - minuteNumber];
        hourNumber = hourNumber+1;
        hourNumber = checkHour(hourNumber);
        hour = names[hourNumber];
        before = ' vor ';
    }
    else if (minuteNumber==30 || minuteNumber==0){
        minute = names[minuteNumber];
        if (minuteNumber==30) {
        hourNumber = hourNumber+1;
        hourNumber = checkHour(hourNumber);
        hour = names[hourNumber];
        }
        before = ' ';
    }

    if (hourNumber>3 && hourNumber!=7 && hourNumber!=10){
        hour = hour+"i";
    }
    else if (hourNumber == 7){
        hour = "sibni"
    }
    else if (hourNumber == 10){
    	hour = "zähni";
    }


    document.getElementById('bernese').innerHTML = "Es isch "+minute+before+hour;

}