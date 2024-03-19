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
                        <img src="${eventoData.image}" alt="${eventoData.title}">
                        <p>${eventoData.text}</p>
                    </section>
                </div>
            `;
    });

    eventosHTML.innerHTML=innerHtml

    console.log(innerHtml)


    // ANTIGUO SCRIPT
    // const eventosHTML = document.querySelector('.timeline');

    // let innerHtml = ""

    // data.forEach((eventoData, index) => {

    //         innerHtml += `
    //             <div class="event">
    //                 <div class="event-info">
    //                     <div class="title-div">
    //                         <h2>${eventoData.title}</h2>
    //                         <p>Fecha: ${eventoData.date}</p>
    //                     </div>
    //                     <div class="img-div">
    //                         <img src="${eventoData.image}" alt="${eventoData.title}">
    //                     </div>
    //                     <div class="description-div">
    //                         <p>${eventoData.text}</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         `;
    // });

    // eventosHTML.innerHTML=innerHtml

    // console.log(innerHtml)

// He metido dentro del fetch los botones para evitar problemas con el css luego si queremos acceder a algun elemento.
    const timeline = document.querySelector('.timeline');
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
        });
    
// este evento de momento no hace nada

function addEventToTimeline(eventData) {
    // Crear un contenedor para el evento
    const eventContainer = document.createElement('div');
    eventContainer.classList.add('event-container');
}