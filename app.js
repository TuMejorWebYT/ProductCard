const imagenes = document.querySelectorAll(".imagenes img");
const imagenMostrada = document.querySelector(".imagen-mostrada img");
const colores = document.querySelectorAll(".colores span");
const tallas = document.querySelectorAll(".tallas .talla");

colores.forEach(color => {
        color.addEventListener("click", () => {
                const id = color.getAttribute("id")
                imagenMostrada.setAttribute("src", `./img/${id}.png`)
        })
})

const eliminarActive = () => {
        tallas.forEach(talla => {
                talla.classList.remove("active")
        })
}

tallas.forEach(talla => {
        talla.addEventListener("click", () => {
                eliminarActive();
                talla.classList.add("active")
        })
})

imagenes.forEach(img => {
        img.addEventListener("click", (e)=> {
                const rutaImagen = e.target.src;
                imagenMostrada.setAttribute("src", rutaImagen)
        })
})