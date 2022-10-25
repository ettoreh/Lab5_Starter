// expose.js

window.addEventListener('DOMContentLoaded', init);

import { JSConfetti } from './js-confetti.browser.js';

function init() {
  const select1 = document.getElementById('horn-select');
  const img1 = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio[class="hidden"]')

  const select2 = document.getElementById('volume');
  const img2 = document.querySelector('img[alt="Volume level 2"');

  const select3 = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  select1.addEventListener('change', (event) => {
    if (event.target.value == 'air-horn') {
      img1.src='assets/images/air-horn.svg';
      audio.src='assets/audio/air-horn.mp3';
    }
    if (event.target.value == 'car-horn') {
      img1.src='assets/images/car-horn.svg';
      audio.src='assets/audio/car-horn.mp3';
    }
    if (event.target.value == 'party-horn') {
      img1.src='assets/images/party-horn.svg';
      audio.src='assets/audio/party-horn.mp3';
    }
  });

  select2.addEventListener('change', (event) => {
    if (event.target.value == 0) {
      img2.src='assets/icons/volume-level-0.svg';
      audio.volume = event.target.value/100;
    }
    else if (event.target.value < 33) {
      img2.src='assets/icons/volume-level-1.svg';
      audio.volume = event.target.value/100;
    }
    else if (event.target.value < 67) {
      img2.src='assets/icons/volume-level-2.svg';
      audio.volume = event.target.value/100;
    }
    else {
      img2.src='assets/icons/volume-level-3.svg';
      audio.volume = event.target.value/100;
    }
  });
  
  select3.addEventListener('click', () => {
    audio.play();
    if (select1.target.value == 'party-horn') {
      // TO DO
      jsConfetti.addConfetti()
    };
  });
}
