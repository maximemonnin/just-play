const intentions = [
  "Play slowly, leave space",
  "Repeat one simple idea",
  "Don't try to improve anything",
  "Stay curious, don't judge",
  "Let mistakes happen",
  "Play fewer notes than you want",
  "Stop thinking, just play",
  "Explore one position only",
  "Change rhythm, not notes",
  "Explore one small pattern",
  "Play only what you already know",
  "Move one idea across the neck",
  "Stay in one area of the fretboard",
  "Play for the full time without stopping",
  "Pause often, then continue",
  "Slow everything down",
  "Focus on timing, not speed",
  "End the session early if it feels done",
  "Focus on rhythm, not notes",
  "Listen more than you play",
  "Make it feel good, not impressive",
  "Play like you're telling a story",
  "Let silence be part of the music",
  "Use only three notes",
  "Repeat one phrase in different ways",
  "Play the same idea at different volumes",
  "Limit yourself on purpose",
  "Change only one thing at a time",
  "Reconnect with the guitar",
  "Just enjoy the sound",
];

const durations = [3, 5, 8, 10];
const tempos = [60, 66, 72, 80, 88, 96, 104, 112, 120];
const keys = ["A", "D", "E", "G", "C", "Am", "Em", "Dm"];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateSession() {
  const duration = pick(durations);
  const tempo = pick(tempos);
  const key = pick(keys);
  const intention = pick(intentions);

  return { duration, tempo, key, intention };
}

const btn = document.getElementById("generateBtn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

let currentSession = null;

btn.addEventListener("click", () => {
  const s = generateSession();
  currentSession = s;

  result.innerHTML = `
    <div class="session-content">
      <h2 class="session-title">Session</h2>

      <div class="session-params">
        <p class="param-row">
          <span class="param-label">Duration</span>
          <span class="param-value">${s.duration} minutes</span>
        </p>
        <p class="param-row">
          <span class="param-label">Tempo</span>
          <span class="param-value">${s.tempo} bpm</span>
        </p>
        <p class="param-row">
          <span class="param-label">Key</span>
          <span class="param-value">${s.key}</span>
        </p>
      </div>

      <div class="intention-block">
        <span class="intention-label">Intention</span>
        <p class="intention-text">${s.intention}</p>
      </div>
    </div>
  `;

  copyBtn.disabled = false;
  copyBtn.textContent = "Copy session";
  copyBtn.classList.remove("copied");
});

copyBtn.addEventListener("click", () => {
  if (!currentSession) return;

  const text = `Just Play Session
Duration: ${currentSession.duration} minutes
Tempo: ${currentSession.tempo} bpm
Key: ${currentSession.key}
Intention: ${currentSession.intention}`;

  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "Copied!";
    copyBtn.classList.add("copied");

    setTimeout(() => {
      copyBtn.textContent = "Copy session";
      copyBtn.classList.remove("copied");
    }, 2000);
  }).catch(() => {
    copyBtn.textContent = "Copy failed";
    setTimeout(() => {
      copyBtn.textContent = "Copy session";
    }, 2000);
  });
});
