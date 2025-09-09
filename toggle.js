const humburger = document.getElementById('humburger')
const mobileManu = document.getElementById('mobileManu')
const cross = document.getElementById('cross')

humburger.addEventListener('click', () => {
    mobileManu.classList.remove('hidden')
})

cross.addEventListener('click', () => {
    mobileManu.classList.add('hidden')
 
})

const aboutUsBtn = document.getElementById('about')
const subManu = document.getElementById('submenu')

aboutUsBtn.addEventListener('click', () => {
    subManu.classList.toggle('hidden')
})
const aboutUsBtnM = document.getElementById('about-m')
const subManuM = document.getElementById('submenu-m')

aboutUsBtnM.addEventListener('click', () => {
    subManuM.classList.toggle('hidden')
})


