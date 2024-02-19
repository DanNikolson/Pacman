'use strict';

const modalWindow = document.querySelector('.modal-window');
const btnStartGame = document.querySelector('button');

const closeModal = function () {
    modalWindow.classList.add('hidden');
}

btnStartGame.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    };
});

