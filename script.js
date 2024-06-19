function ToggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // Pegar a tag img
    const img = document.querySelector ("#profile img")

    // substituir a imagem
    
     if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a img light    
        img.setAttribute('src', './assets/Avatar-light.png')
     } else {
    //  se tiver sem light mode, mander a img normal 
        img.setAttribute('src', './assets/Avatar.png')

     }
}