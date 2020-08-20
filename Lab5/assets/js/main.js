var arr = ['1','2','3'];
var imgview = document.getElementById('img');
var next = document.getElementById('next');
var back = document.getElementById('back');
var add = document.getElementById('add');
var date = document.getElementById('date');
var count= 0;


next.addEventListener("click",function(){
    next1()
});
back.addEventListener("click",function(){
    back1()
});
add.addEventListener("click",function(){
    add1()
});
date.addEventListener("click",function(){
    document.getElementById('time').classList.toggle("hide");
});
function next1(){
    if(count==arr.length - 1){
        count =0;
    }else{
        count++;
    }
    var img = arr[count];
    setImg(img);
}

function back1(){
    if(count==0){
        count =arr.length-1;
    }else{
        count--;
    }
    var img = arr[count];
    setImg(img);
}

function add1(){
    var img = prompt("Enter Image File Name");
    arr.push(img);
}


function setImg(img){
    imgview.src = "assets/"+img+".jpg";
}


function showdate(){
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
}
showdate()
