document.addEventListener('DOMContentLoaded', () => {
    const feelingButton = document.querySelector('.feeling-button');
    const leftBlock = document.querySelector('.left-block');
    const optionsList = document.querySelector('.options-list');

    // Constantes para el modal "Estoy feliz"
    const feelingModal = document.getElementById('feelingModal');
    const closeButtonTop = feelingModal.querySelector('.close-button');
    const closeButtonBottom = feelingModal.querySelector('.modal-close-btn');

    // Constantes para el modal "Estoy triste"
    const feelingSadModal = document.getElementById('feelingSadModal');
    const sadModalCloseButtonTop = feelingSadModal.querySelector('.close-button');
    const sadModalCloseButtonBottom = feelingSadModal.querySelector('.modal-close-btn');

    // Constantes para el modal "Estoy bajoneada"
    const feelingDownModal = document.getElementById('feelingDownModal');
    const downModalCloseButtonTop = feelingDownModal.querySelector('.close-button');
    const downModalCloseButtonBottom = feelingDownModal.querySelector('.modal-close-btn');

    // Constantes para el modal "Estoy frustrada"
    const feelingFrustratedModal = document.getElementById('feelingFrustratedModal');
    const frustratedModalCloseButtonTop = feelingFrustratedModal.querySelector('.close-button');
    const frustratedModalCloseButtonBottom = feelingFrustratedModal.querySelector('.modal-close-btn');

    // ********** NUEVAS CONSTANTES PARA EL MODAL "No sé cómo me siento" **********
    const feelingUnsureModal = document.getElementById('feelingUnsureModal');
    const unsureModalCloseButtonTop = feelingUnsureModal.querySelector('.close-button');
    const unsureModalCloseButtonBottom = feelingUnsureModal.querySelector('.modal-close-btn');
    // ******************************************************************************

    // Funcionalidad para el botón "¿Cómo te sientes hoy?"
    feelingButton.addEventListener('click', () => {
        leftBlock.classList.toggle('visible');
    });

    // Función auxiliar para ocultar todos los modales
    const hideAllModals = () => {
        feelingModal.style.display = 'none';
        feelingSadModal.style.display = 'none';
        feelingDownModal.style.display = 'none';
        feelingFrustratedModal.style.display = 'none';
        feelingUnsureModal.style.display = 'none'; // NUEVO: Oculta el modal de no sé cómo me siento
    };

    // Funcionalidad para las opciones del menú
    optionsList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedFeeling = event.target.textContent;

            // Oculta todos los modales antes de mostrar el correcto
            hideAllModals();

            if (selectedFeeling === '- Estoy feliz') {
                feelingModal.style.display = 'flex';
            } else if (selectedFeeling === '- Estoy triste') {
                feelingSadModal.style.display = 'flex';
            } else if (selectedFeeling === '- Estoy bajoneada') {
                feelingDownModal.style.display = 'flex';
            } else if (selectedFeeling === '- Estoy frustrada') {
                feelingFrustratedModal.style.display = 'flex';
            } else if (selectedFeeling === '- No sé cómo me siento') { // ********** NUEVA CONDICIÓN **********
                feelingUnsureModal.style.display = 'flex';
            }
            // No hay 'else' final porque si no coincide con ninguna opción, simplemente no muestra un modal
            // y los modales ya están ocultos por hideAllModals().
        }
    });

    // Funcionalidad para cerrar el modal "Estoy feliz"
    closeButtonTop.addEventListener('click', hideAllModals);
    closeButtonBottom.addEventListener('click', hideAllModals);
    window.addEventListener('click', (event) => {
        if (event.target === feelingModal) {
            hideAllModals();
        }
    });

    // Funcionalidad para cerrar el modal "Estoy triste"
    sadModalCloseButtonTop.addEventListener('click', hideAllModals);
    sadModalCloseButtonBottom.addEventListener('click', hideAllModals);
    window.addEventListener('click', (event) => {
        if (event.target === feelingSadModal) {
            hideAllModals();
        }
    });

    // Funcionalidad para cerrar el modal "Estoy bajoneada"
    downModalCloseButtonTop.addEventListener('click', hideAllModals);
    downModalCloseButtonBottom.addEventListener('click', hideAllModals);
    window.addEventListener('click', (event) => {
        if (event.target === feelingDownModal) {
            hideAllModals();
        }
    });

    // Funcionalidad para cerrar el modal "Estoy frustrada"
    frustratedModalCloseButtonTop.addEventListener('click', hideAllModals);
    frustratedModalCloseButtonBottom.addEventListener('click', hideAllModals);
    window.addEventListener('click', (event) => {
        if (event.target === feelingFrustratedModal) {
            hideAllModals();
        }
    });

    // ********** NUEVA FUNCIONALIDAD PARA CERRAR EL MODAL "No sé cómo me siento" **********
    unsureModalCloseButtonTop.addEventListener('click', hideAllModals);
    unsureModalCloseButtonBottom.addEventListener('click', hideAllModals);
    window.addEventListener('click', (event) => {
        if (event.target === feelingUnsureModal) {
            hideAllModals();
        }
    });
    // *************************************************************************************
});