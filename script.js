// Jquery

$(document).ready(function(){
    function Time(){
        var t = new Date();
        let hrs = t.getHours();
        let mins = t.getMinutes();
        let secs = t.getSeconds();

        let period = "AM";
        if (hrs>=12){
            period = "PM";
        }
        
        if (hrs>12){
            hrs = hrs-12;
        }
        if (hrs==0){
            hrs=12;
        }
        $('#hours').text(hrs);
        $('#mins').text(mins);
        $('#secs').text(secs);
        $('#period').text(period);

        setTimeout(Time,1000);
    }
    Time();
});