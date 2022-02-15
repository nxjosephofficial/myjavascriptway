// Hesaplama
function Hesaplama() {
var a = 1010;
var b = 1515;
var c = 2020;
var t = a + b + c;
document.write(t);
document.write("<br>");
}
Hesaplama()

// Veri turleri
function veriturleri() {
// number + boolean
    var y = true;
    var p = 50;
    document.write(y + p);
    document.write("<br>");
    var k = true;
    var l = 50;
    document.write(l - k);
    document.write("<br>");

// string + number
    var n ="Merhaba ";
    var m = 40;
    var total = n + m;
    document.write(total);
    document.write("<br>");

// string + boolean
    var j= "hosgeldin";
    var h=false;
    document.write(j+h);
    document.write("<br>");
}
veriturleri()
// takvim
function takvim() {
document.write("<br>")
var tarih= new Date();
var gun=tarih.getDay();
var ay=tarih.getMonth();
var yil=tarih.getFullYear();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();
document.write(gun+"/"+ay+"/"+yil+"<br>"+saat+":"+dakika+":"+saniye);
}
takvim();
/* 
Coklu
Mesaj
Test
asamasi
:)
*/
// hic alert yapmadim cunku uyari vermesini sevmiyorum, yorum seklinde yazabilirim.
// alert("Websiteme Hosgeldiniz!");
// alert("Tarayiciniz bu ozelligi desteklememektedir.");
// alert(total);
// alert(toplam);
// alert(uyari);
// muzik ekledim
Audio = new Audio();
Audio.src = "soundtrack.mp3";
Audio.loop = true;
Audio.volume = 0.2;
Audio.play();