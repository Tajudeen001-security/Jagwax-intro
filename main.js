// main.js for Jagwax World

// Set copyright year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Birthday Countdown logic
  function nextBirthday(month, day) {
    const now = new Date();
    let year = now.getFullYear();
    let bday = new Date(year, month - 1, day);
    if (bday < now) bday = new Date(year + 1, month - 1, day);
    return bday;
  }

  function showCountdown(elementId, month, day) {
    const el = document.getElementById(elementId);
    function update() {
      const now = new Date();
      const bday = nextBirthday(month, day);
      const ms = bday - now;
      if (ms < 0) {
        el.textContent = "Happy Birthday!";
        return;
      }
      const days = Math.floor(ms / 86400000);
      const hours = Math.floor((ms % 86400000) / 3600000);
      const mins = Math.floor((ms % 3600000) / 60000);
      el.textContent = `${days}d ${hours}h ${mins}m`;
    }
    update();
    setInterval(update, 60000);
  }

  // Detect if birthday countdown section exists
  if (document.getElementById('bday-eunice')) {
    showCountdown("bday-eunice", 6, 18); // June 18, Eunice
  }
  if (document.getElementById('bday-faidat')) {
    showCountdown("bday-faidat", 3, 21); // March 21, Faidat
  }
  if (document.getElementById('bday3')) {
    showCountdown("bday3", 7, 19); // Example
  }
  if (document.getElementById('bday4')) {
    showCountdown("bday4", 11, 8);
  }
  if (document.getElementById('bday5')) {
    showCountdown("bday5", 12, 3);
  }

  // Add more interactive features here as needed
  // e.g., modal popups, FAQ accordion, song player, etc.
});