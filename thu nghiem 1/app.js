const sidebar = document.querySelector('.sidebar')
// console.log(sidebar)
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', () => {
  sidebar.classList.add('show')
})
const close_sidebar = document.querySelector('.sidebar button')
close_sidebar.addEventListener('click', () => {
  sidebar.classList.remove('show')
})
