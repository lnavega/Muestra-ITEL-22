let grid = document.querySelector('.grid-container')
let selProdu = document.querySelector('body')

selProdu.addEventListener('click', eventList)
document.addEventListener('DOMContentLoaded', loadSelect())

for (img of imagenes) {
    const figu = document.createElement('div')
    figu.classList.add('grid-item')
    figu.innerHTML = `
        <img src="img/figus/${img}" alt="${img}" class="grid-img">
        `
    if (grid) {
        grid.appendChild(figu)
    }
}

function eventList(e) {
    if (e.target.classList.contains('grid-img')) {
        const imgSel = e.target.getAttribute('src')
        saveSel(imgSel)
    }
}

function saveSel(imgSel) {
    localStorage.setItem('select', JSON.stringify(imgSel))
    window.location.href = "../select.html";
}

function loadSelect() {
    if (localStorage.getItem('select')) {
        const selectLS = JSON.parse(localStorage.getItem('select'))
        if (document.querySelector('#selProdu')) {
            let content = document.querySelector('.selBanner')
            selProdu = document.createElement('div')
            selProdu.classList.add('img-content')
            selProdu.innerHTML = `
                <img src="${selectLS}" alt="${selectLS}">
            `
            content.appendChild(selProdu)
        }
    }
}