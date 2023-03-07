let colapse = document.querySelector('.svg-icon')
let items = document.getElementById('items')
let url = self.location.href
let barra = url.lastIndexOf("/")
let nombre = url.substring( barra + "/".length , url.length )
let vp = window.innerWidth

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader')
    loader.style.opacity = 0
    loader.style.visibility = 'hidden'

    if(nombre === 'images.html'){
        if (!(imagenes.length > 5) && vp > 1140) {
            let footer = document.getElementById('footer')
            footer.style.position = 'absolute'
            footer.style.bottom = '0px'
        } else if (!(imagenes.length > 6) && vp <= 1140) {
            let footer = document.getElementById('footer')
            footer.style.position = 'absolute'
            footer.style.bottom = '0px'
        }
    }
})

loadEventLis()
function loadEventLis() {
    colapse.addEventListener('click', show_items)
}

function show_items(e) {
    if (e.target.classList.contains('svg-icon')) {
        items.classList.toggle('active')
    }
}