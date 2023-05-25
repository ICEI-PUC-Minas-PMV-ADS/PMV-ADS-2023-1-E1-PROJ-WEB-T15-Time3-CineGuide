const trailerButtons = document.querySelectorAll('.trailer-button')

trailerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const trailerUrl = button.dataset.trailer;
        const trailerModal = document.createElement('div')
        trailerModal.classList.add('trailer-modal')
        trailerModal.innerHTML = `
      <div class="modal-contents" id="trailler-container">
      <iframe width="560" height="315" src="${trailerUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button class="close-modal">Fechar</button>
      </div>
      <div class="modal-overlay"></div>
    `;
        document.body.appendChild(trailerModal);
        const closeModalButton = trailerModal.querySelector('.close-modal')
        closeModalButton.addEventListener('click', () => {
            trailerModal.remove()
        })
    })
})

