let body=document.getElementById('body');




let pic1=document.getElementById('pic1');
let pic2=document.getElementById('pic2');
let pic3=document.getElementById('pic3');
let pic4=document.getElementById('pic4');
let font1=document.getElementById('font1');
let clicker1=document.getElementById('clicker1');
let clicker2=document.getElementById('clicker2');
let clicker3=document.getElementById('clicker3');
let clicker4=document.getElementById('clicker4');
let nav1=document.getElementById('planet-nav');
let haus1=document.getElementById('haus1');
let haus2=document.getElementById('haus2');
let haus3=document.getElementById('haus3');
let menus=document.getElementById('menus');
let planethaus1=document.getElementById('planet-haus');



let raus1=setTimeout(function(){
    pic1.style.display='flex';
},)
let raus2=setTimeout(function(){
    pic2.style.display='flex';
},)
let raus3=setTimeout(function(){
    pic3.style.display='flex';
},)
let raus4=setTimeout(function(){
    pic4.style.display='flex';
},)





pic1.onclick=function zoom1(){
    body.style.backdropFilter='blur(20px)';
    pic2.style.display='none';
    pic3.style.display='none';
    pic4.style.display='none';
    pic1.style.transform='translateX(650px)';
    pic1.style.bottom='150px';
    pic1.style.height='600px';
    font1.style.display='flex';
 nav1.style.display='flex';
 clicker2.style.boxShadow='none';
haus1.style.display='none';
haus2.style.display='none';
haus3.style.display='none';

}
clicker1.onclick=function(){
     body.style.backdropFilter='none';
    pic2.style.display='flex';
    pic3.style.display='flex';
    pic4.style.display='flex';
    pic1.style.transform='translateX(0px)';
    pic1.style.height='250px';
    font1.style.display='none';
 nav1.style.display='none';
 pic1.style.bottom='0px';
 pic1.style.display='flex';
 haus1.transform='translateX(0px)';
}

clicker2.onclick=function(){
    pic1.style.display='none';
    clicker2.style.boxShadow='2px 2px 20px red';
haus1.style.display='flex';
haus2.style.display='flex';
haus3.style.display='flex';
haus1.style.transform='translate(0)';
}


haus1.onclick=function(){
    haus2.style.display='none';
    haus3.style.display='none';
    haus1.style.animation='none';
    haus1.style.transform='translateX(350px)'
}
