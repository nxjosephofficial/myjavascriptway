function HesapMakinesi() {
// Variables of Hesap Makinesi	// Hesap Makinesi'nin degiskenleri
var operation = prompt("Islem turunu seciniz. +, -, *, /,");
var firstinput = parseInt(prompt("Ilk sayiyi giriniz.", ""));
var secondinput = parseInt(prompt("Ikinci sayiyi giriniz.", ""));

// if statements // if ifadeleri
if (operation == "+")
{alert(firstinput+secondinput);}
if (operation == "-")
{alert(firstinput-secondinput);}
if (operation == "*")
{alert(firstinput*secondinput);}
if (operation == "/")
{alert(firstinput/secondinput);}
}

HesapMakinesi();

function KullaniciEtkilesim() {
	// Variables of Kullanici Etkilesim // Kullanici Etkilesim'in Degiskenleri
	var zaman = new Date();
	var saat = zaman.getHours();
	// If statements // if ifadeleri
	if (saat >= 6 && saat<12)
	{alert("Günaydınlar.");}
	if (saat >=12 && saat<15)
	{alert("İyi öğlenler.");}
	if (saat  >=15 && saat<20)
	{alert("İyi akşamlar.");}
	if (saat >=20 && saat<23)
	{alert("İyi geceler.");}
	if (saat<6)
	{alert("Geceniz hayır olsun.");}
}

KullaniciEtkilesim();