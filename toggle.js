const btn = document.getElementById('toggle-btn')
const navLink = document.getElementById('navlinks')

btn.addEventListener('click', () => {
    navLink.classList.toggle('hidden')
})


