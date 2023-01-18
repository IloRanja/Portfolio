window.addEventListener('scroll',function(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky",window.scrollY > 0);
    });
/*scroll image*/
    let slideIndex = 1;
    showSlides(slideIndex);
    function plusslides(n){
        showSlides(slideIndex += n);
    }
    function currentslides(n){
        showSlides(slideIndex = n);
    }
    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("slide");
        if(n>slides.length){slideIndex = 1;}
        if(n < 1){
            slideIndex = slides.length;
        }
        for(i=0;i < slides.length;i++){
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
        slides[slideIndex-1].style.transition = "all 0.6s ease";
    } 





