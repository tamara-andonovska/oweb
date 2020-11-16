var likes1 = 0;
var likes2 = 0;
var likes3 = 0;
var likes4 = 0;
var likes5 = 0;
var likes6 = 0;

function like1() {
    likes1++;
    document.getElementById("likes1").innerHTML = likes1;
};

function like2() {
    likes2++;
    document.getElementById("likes2").innerHTML = likes2;
};

function like3() {
    likes3++;
    document.getElementById("likes3").innerHTML = likes3;
};

function like4() {
    likes4++;
    document.getElementById("likes4").innerHTML = likes4;
};

function like5() {
    likes5++;
    document.getElementById("likes5").innerHTML = likes5;
};

function like6() {
    likes6++;
    document.getElementById("likes6").innerHTML = likes6;
};

function forma(){
    window.alert("Thank you for completing the form!");
};

document.getElementById("ime").onclick = function(){
	var imee = prompt("Name and surname: ");
  document.getElementById("imeK").innerText = imee;
}

document.getElementById("komentar").onclick = function(){
	var komentarr = prompt("Comment: ");
  document.getElementById("komentarK").innerText = komentarr;
}