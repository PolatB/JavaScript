// name input
let Text = prompt ('Lütfen Adınızı Giriniz...');
let result = Text.bold();
document.write (`Merhaba, ${result}! Hoş geldin!`);

// clock
function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
         month = '0'+month;
    }
    if(day.toString().length == 1) {
         day = '0'+day;
    }   
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = hour+':'+minute+':'+second+' '+day+'/'+month+'/'+year;
     return dateTime;
}

//realtime clock
setInterval(function(){
    currentTime = getDateTime(1);
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);
