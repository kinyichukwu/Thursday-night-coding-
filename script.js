

var header = document.getElementById("headerx");
var m1 = document.getElementById("model1");
var m2 = document.getElementById("model2");
var m3 = document.getElementById("model3");
var m4 = document.getElementById("model4");

m1.onclick = function(){
    header.style.backgroundImage= "url(image-1.png)";
}
m2.onclick = function(){
    header.style.backgroundImage= "url(image-2.png)";
}
m3.onclick = function(){
    header.style.backgroundImage= "url(image-3.png)";
}
m4.onclick = function(){
    header.style.backgroundImage= "url(image-4.png)";
}

