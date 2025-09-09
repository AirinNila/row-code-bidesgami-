const humburger = document.getElementById('humburger')
const mobileManu = document.getElementById('mobileManu')

humburger.addEventListener('click', () => {
    mobileManu.classList.toggle('hidden')
})

const aboutUsBtn = document.getElementById('about')
const subManu = document.getElementById('submenu')

aboutUsBtn.addEventListener('click', () => {
    subManu.classList.toggle('hidden')
})


