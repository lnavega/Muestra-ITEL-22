let banner = document.querySelector('.grid-banner')
let numbers = []
let num1 = Math.floor(Math.random() * imagenes.length)
numbers.push(num1)
let num2 = Math.floor(Math.random() * imagenes.length)
checkNum(num2)
let num3 = Math.floor(Math.random() * imagenes.length)
checkNum(num3)

for (let i = 0; i < 3; i++) {
    const figu_banner = document.createElement('div')
    figu_banner.classList.add('grid-item')
    console.log(imagenes[numbers[i]])
    figu_banner.innerHTML = `
            <img src="img/figus/${imagenes[numbers[i]]}" alt="" class="grid-img">
        `
    banner.appendChild(figu_banner)
}

function checkNum(num) {
    if (!numbers.includes(num)) {
        numbers.push(num)
    } else {
        while (numbers.includes(num)) {
            num = Math.floor(Math.random() * (imagenes.length))
            if (!numbers.includes(num)) {
                numbers.push(num)
                break
            }
        }
    }
}