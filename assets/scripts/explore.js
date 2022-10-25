// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const text = document.querySelector('textarea');
  const inputTxt = document.querySelector('.txt');
  const voiceSelect = document.getElementById('voice-select');
  const img = document.querySelector('img[alt="Smiling face"]')
  const start = document.querySelector('button')

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  start.addEventListener('click', () => {
  
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // utterThis.pitch = pitch.value;
    // utterThis.rate = rate.value;

    img.src = 'assets/images/smiling-open.png';
    synth.speak(utterThis);
    inputTxt.blur();
  })

  await (img.src = 'assets/images/smiling.png');

}
