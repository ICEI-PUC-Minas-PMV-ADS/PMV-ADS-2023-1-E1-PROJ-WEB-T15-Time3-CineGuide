 /* GLIDER */ 

 window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 2,
    draggable:true,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    
    
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 380,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  })
  new Glider(document.querySelector('.glider-2'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 2,
    draggable:true,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    
    
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 380,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  })


})


/*********************************************************/



/****************************
        CARROSSEL 
****************************/

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")
  
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
  }
  
  let slideIndex = 1
  showSlides(slideIndex)
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n))
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n))
  }

  /*---------------------*/

