
// powerpoint code
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

//calculating the result
document.getElementById("form1").onsubmit=function() {
        q1 = parseInt(document.querySelector('input[name = "variable"]:checked').value);
        q2 = parseInt(document.querySelector('input[name = "sub"]:checked').value);
        q3 = parseInt(document.querySelector('input[name = "con"]:checked').value);
        q4 = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
        
        result = q1 + q2 + q3 + q4;
        
        document.getElementById("grade").innerHTML = result;

        if (result == 0) {result2 = "I don't think you studied."};
        if (result == 25) {result2 = "You need to spend more time. Try again."};
        if (result == 50) {result2 = "I think you could do better. Try again."};
        if (result == 75) {result2 = "So close. Try again."};
        if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};

        document.getElementById("grade2").innerHTML = result2; 
return false; // required to not refresh the page; just leave this here
} //this ends the submit function
