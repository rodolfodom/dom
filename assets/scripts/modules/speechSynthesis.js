const d = document;

export function speak() {
  let $select = d.getElementById("voice-select"),
    $text = d.getElementById("voice-script"),
    $buttonReader = d.getElementById("speaker"),
    speech = new SpeechSynthesisUtterance(),
    voices;
  speechSynthesis.addEventListener("voiceschanged", (e) => {
    voices = speechSynthesis.getVoices();
    voices.forEach((el) => {
      let $option = d.createElement("option");
      $option.value = el.name;
      $option.textContent = el.name;
      $select.appendChild($option);
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $select) {
      speech.voice = voices.find((el) => el.name === e.target.value);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $buttonReader) {
      speech.text = $text.value;
      speechSynthesis.speak(speech);
    }
  });
}
