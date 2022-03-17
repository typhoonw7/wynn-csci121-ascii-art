async function loadArt(filename) {
  const response = await fetch("/art/" + filename);
  const text = await response.text();
  document.getElementById("ascii").textContent = text;
}

document.addEventListener("DOMContentLoaded", function(event) {
  var random_art = ART[Math.floor(Math.random() * ART.length)];
  document.getElementById("title").textContent = random_art.title;
  document.getElementById("credit").textContent = random_art.credit_text;
  if ("credit_url" in random_art) {
    document.getElementById("credit").href = random_art.credit_url;
  }
  loadArt(random_art.filename);
});
