function toggleMode() {
  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //
  const html = document.documentElement // BUSCANDO O HTML
  html.classList.toggle("light") // TROCANDO A CLASSE
  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// maneira mais simples de mandar eventos com javascript
// exite outras maneiras? Quais são ?

//   onclick="toggleMode()">
