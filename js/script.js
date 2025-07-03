document.addEventListener('DOMContentLoaded', () => {
    const feelingButton = document.querySelector('.feeling-button');
    const leftBlock = document.querySelector('.left-block');
    const optionsList = document.querySelector('.options-list');

    const feelingModal = document.getElementById('feelingModal');
    const feelingSadModal = document.getElementById('feelingSadModal');
    const feelingDownModal = document.getElementById('feelingDownModal');
    const feelingFrustratedModal = document.getElementById('feelingFrustratedModal');
    const feelingUnsureModal = document.getElementById('feelingUnsureModal');

    const closeButtons = document.querySelectorAll('.modal .close-button, .modal .modal-close-btn');


    const hideAllModals = () => {
        feelingModal.style.display = 'none';
        feelingSadModal.style.display = 'none';
        feelingDownModal.style.display = 'none';
        feelingFrustratedModal.style.display = 'none';
        feelingUnsureModal.style.display = 'none';
    };

    const hideLeftBlock = () => {
        leftBlock.classList.remove('visible');
    };

    feelingButton.addEventListener('click', () => {
        leftBlock.classList.toggle('visible');
    });

    optionsList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const selectedFeeling = event.target.textContent;

            hideAllModals(); 

            let modalToDisplay = null;

            if (selectedFeeling === '- Estoy feliz') {
                modalToDisplay = feelingModal;
            } else if (selectedFeeling === '- Estoy triste') {
                modalToDisplay = feelingSadModal;
            } else if (selectedFeeling === '- Estoy bajoneada') {
                modalToDisplay = feelingDownModal;
            } else if (selectedFeeling === '- Estoy frustrada') {
                modalToDisplay = feelingFrustratedModal;
            } else if (selectedFeeling === '- No sé cómo me siento') {
                modalToDisplay = feelingUnsureModal;
            }

            if (modalToDisplay) {
                modalToDisplay.style.display = 'flex'; 
            }

            hideLeftBlock();
        }
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllModals();
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) { 
                hideAllModals();
            }
        });
    });

    hideLeftBlock();
});