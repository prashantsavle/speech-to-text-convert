window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const speech = new SpeechRecognition();
speech.interimResults = true;

let para = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(para);

speech.addEventListener("result", (e) => {
  // results of the event
  const output = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  para.textContent = output;
  // based on condition creating new para everytime
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
  // console.log(output);
});

speech.addEventListener("end", speech.start);
speech.start();
