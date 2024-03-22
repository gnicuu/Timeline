fetch("https://gist.githubusercontent.com/bertez/8e62741154903c35edb3bfb825a7f052/raw/b5cd5137fd168116cc71740f1fbb75819d0fa82e/zelda-timeline.json")
.then(response => response.json())
.then(data => {

    // ordenar el array de objeto por fecha
    data.sort((a, b) => (a.date) - (b.date));

    // Creamos un contenedor para los eventos
    const eventosHTML = document.querySelector('.app');

    let innerHtml = ""

    data.forEach((eventoData, index) => {

            innerHtml += `
                <div class="event">
                    <header>
                        <h2>${eventoData.title}</h2>
                        <p>${eventoData.date}</p>
                    </header>
                    <section>
                        <div class="div-img">
                            <img src="${eventoData.image}" alt="${eventoData.title}">
                        </div>
                        <div class="div-description">
                            <p>${eventoData.text}</p>
                        </div>
                    </section>
                </div>
            `;
    });

    eventosHTML.innerHTML=innerHtml

 
  
// Crear un contenedor para el evento
function addEventToTimeline(eventData) {
    const eventContainer = document.createElement('div');
    eventContainer.classList.add('event-container');
}
});



//BOTONES
const timeline = document.querySelector('.app');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateTimeline();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, timeline.children.length - 1);
    updateTimeline();
});

function updateTimeline() {
    const offset = -(currentIndex * 100);
    timeline.style.transform = `translateX(${offset}%)`;
}
   


// Animacion footer

function expandFooter() {
    const footer = document.getElementById('footer');
    footer.classList.toggle('expanded');
  }
  // Obtener elementos del DOM
const addEventButton = document.getElementById('addEventButton');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

// Función para mostrar el modal
function showModal() {
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Evento para abrir el modal al hacer clic en el botón
addEventButton.addEventListener('click', showModal);

// Evento para cerrar el modal al hacer clic en la X
closeButton.addEventListener('click', closeModal);

// Evento para cerrar el modal al hacer clic fuera del mismo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

