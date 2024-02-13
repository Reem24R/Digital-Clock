
function displaytime()
{
    var datatime= new Date();
    let h=datatime.getHours();
    let m=datatime.getMinutes();
    let s=datatime.getSeconds();
    let sec=document.getElementById('session');
    if(h>=12)
    {
        sec.innerHTML="PM";
    }else
    {
        sec.innerHTML="AM";
    }
    if(h>12)
    {
        h-=12;
    }
    document.getElementById('hours').innerHTML=h;
    document.getElementById('mintes').innerHTML=m;
    document.getElementById('seconds').innerHTML=s;
    
}
setInterval(displaytime,10);







// function displaytime(){
//     let datatime=new Date();
// let h=datatime.getHours();
// let m=datatime.getMinutes();
// let s=datatime.getSeconds();
// var sessiion1=document.getElementById('session');
// if(h>=12)
// {
//     sessiion1.innerHTML="PM";
// }else
// {
//     sessiion1.innerHTML="AM";
// }
// if(h>12)
// {
//     h=h-12;
// }
// document.getElementById('hours').innerHTML=h;
// document.getElementById('mintes').innerHTML=m;
// document.getElementById('seconds').innerHTML=s;
// }
// displaytime();
// setInterval(displaytime,1000);