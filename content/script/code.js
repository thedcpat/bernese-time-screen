//Bernese-Dialect Clock Web Application in JS
//By thedcpat in 2020

//Global call of the two main functions
setInterval(function calls(){timeInDialect(); displayWelcomeMsg();});

//Define and write Welcome-Message based on the time to be shown on top of the page
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

//JS for the weather widget: Gets instantly called
!function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');

//transform hour to 12 hour format
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

//Define and write the time-numbers in dialect-words eefe
function timeInDialect() {

    var today = new Date();
    var numberName = new Map();

    var hourNumber = today.getHours();
    var minuteNumber = today.getMinutes();

    hourNumber = checkHour(hourNumber);
    
    var names = ['Punkt','eis','zwöi','drüü','vier','füf','sächs','sibe','acht','nüün','zäh','euf','zwöuf','drizäh','vierzäh','viertu','sächzäh','sibzäh','achtzäh','nüünzäh','zwänzg','einezwänzg','zwöiezwänzg','drüezwänzg','vierezwänzg',
    'füfezwänzg','sächsezwänzg','sibenezwänzg','achtezwänzg','nüünezwänzg','haubi'];

    var hour = names[hourNumber]

    if (minuteNumber<30 && minuteNumber!=0){
        minute = names[minuteNumber]
        before = ' ab ';
    }
    else if (minuteNumber>30 && minuteNumber<40){
        minute = names[minuteNumber - 30];
        hourNumber = hourNumber + 1;
        hourNumber = checkHour(hourNumber);
        hour = names[hourNumber];
        before = ' ab haubi '
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

/* Update the theme, call with arguments 'themename' or 'standard' to reset theme. */
// Note: theme is reset at page-reload because it is not yet saved in local/session storage or a cookie.

function changeTheme(theme) {
    var themeList = ['theme1', 'theme2', 'theme3'];
    for (style in themeList) {
        document.querySelector('html').classList.remove(themeList[style]);
    }
    if (theme != 'standard') {
        document.querySelector('html').classList.add(theme);
    }

    // This part updates the weatherwidget attributes and reinitializes the widget.
    document.getElementById('widget').setAttribute('data-basecolor', getComputedStyle(document.documentElement).getPropertyValue('--color1'));
    document.getElementById('widget').setAttribute('data-textcolor', getComputedStyle(document.documentElement).getPropertyValue('--color0'));
    __weatherwidget_init()
}