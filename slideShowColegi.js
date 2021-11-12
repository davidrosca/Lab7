<script>
function functie(){
document.getElementById("Nume").innerHTML="Doctor ing. David Sorin Rosca";
document.getElementById("Activitatireprezentative").innerHTML="Activitati din perioada facultatii";
document.getElementById("citit").innerHTML="Party cu colegii din campus";
document.getElementById("voluntariat").innerHTML="OSUT";
document.getElementById("excursii").innerHTML="Seara de socializarea in OSUT";
document.getElementById("Paginaprincipala").innerHTML="Pagina Secundara";
document.getElementById("Imagine").src="Davidjavascript.jpeg";
document.getElementById("Imagine").style.opacity="0.4";
document.getElementById("Imagine").style.borderRadius ="20%";
document.body.style.backgroundColor = "yellow";
document.getElementById("email").style.color = "#ff0000";
document.getElementById("citat").style.color = "magenta";
document.getElementById("materie").style.color = "blue";
document.getElementById("anul").style.color = "lightblue";
document.getElementById("f").style.color = "orange";
document.getElementById("alga").style.color = "magenta";
document.getElementById("ccp").style.color = "blue";
document.getElementById("Prog").style.color = "red";
document.getElementById("Nume").style.color ="red";
document.getElementById("Activitatireprezentative").style.color ="blue";
document.getElementById("citit").style.color ="pink";
document.getElementById("excursii").style.color ="black";
}
function arVarst(){
var azi = new  Date();
var varstMea;
var anNasc = document.getElementById("varsta").innerHTML;
varstMea = azi.getFullYear()-parseInt(anNasc);
document.getElementById("varsta").innerHTML =varstMea;}
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000);
    }
</script>
<div class="slideshow-container">

    <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="Imagine.jpeg" style="width:100%">
        <div class="text">
            <a href = "David.html" >David Rosca</a>
        </div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="Marian.jpg" style="width:100%">
        <div class="text">
            <a href="Marian.html">Marian </a>
        </div>
    </div>

    <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="Oprita.jpg" style="width:100%">
        <div class="text">
            <a href = "Oprita.html"> Oprita </a>
        </div>
    </div>

</div>
<div class="mySlides fade">
< div class="numbertext"> 2/3</div>
<img scr="Radu.jpg" style="width:100%">
<div class="text">
< a href="Radu.html">Radu</a>
</div>

<br>

<div style="text-align:center">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div>

<script>
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 3000);
    }
</script>