const songs = document.querySelectorAll("ul > li");

console.log(songs);

for (const song of songs) {
  console.log(song);
  song.classList.add('red');
}