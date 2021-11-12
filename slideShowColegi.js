<style>
    body{color:blue;
    background-color:red;}
    *{box-sizing: border-box;}
    body {font-family: Verdana, sans-serif;}
    .mySlides {display: none;}
    img {vertical-align: middle;}

    .slideshow-container {
        max-width: 450px;
        position: relative;
        margin: auto;
    }

    .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
    }
    .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }
    .dot {
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
    }

    .active {
        background-color: #717171;
    }


    .fade {
        -webkit-animation-name: fade;
        -webkit-animation-duration: 3s;
        animation-name: fade;
        animation-duration: 3s;
    }

    @-webkit-keyframes fade {
        from {opacity:0.4}
        to {opacity: 1}
    }

    @keyframes fade {
        from {opacity:0.4}
        to {opacity: 1}
    }
    @media only screen and (max-width: 300px) {
        .text {font-size: 11px}
    }
</style>
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
        <div class="numbertext">3 / 4</div>
        <img src="Oprita.jpg" style="width:100%">
        <div class="text">
            <a href = "Oprita.html"> Oprita </a>
        </div>
    </div>

</div>
<div class="mySlides fade">
<div class="numbertext"> 4/4</div>
<img scr="Radu.jpg" style="width:100%">
<div class="text">
<a href="Radu.html">Radu</a>
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