function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicional a imagem light
    img.setAttribute("src", "./assets/Avatar-Nicole-light.png")
    img.setAttribute(
      "alt",
      "Foto de Avatar-Nicole Magalhães sorrindo, com luz do sol"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar-Nicole.png")
    img.setAttribute("alt", "Foto de Avatar-Nicole Magalhães sorrindo")
  }
}
