window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 4,
    slidesToScroll: 1,
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
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
})


const trailerButtons = document.querySelectorAll('.trailer-button');

trailerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const trailerUrl = button.dataset.trailer;
        const trailerModal = document.createElement('div');
        trailerModal.classList.add('trailer-modal');
        trailerModal.innerHTML = `
      <div class="modal-content" id="trailler-container">
      <iframe width="560" height="315" src="${trailerUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button class="close-modal">Fechar</button>
      </div>
      <div class="modal-overlay"></div>
    `;
        document.body.appendChild(trailerModal);
        const closeModalButton = trailerModal.querySelector('.close-modal');
        closeModalButton.addEventListener('click', () => {
            trailerModal.remove();
        });
    });
})