let menuSection = document.getElementById('menuSection');
let menuIcon = document.getElementById('menuIcon');
let xIcon = document.getElementById('xIcon');
let menuIconSection = document.getElementById('menuIconSection');
menuIconSection.addEventListener('click', function() {
    menuSection.classList.toggle('menu-display')
    xIcon.classList.toggle('d-none')
    menuIcon.classList.toggle('d-none')
    document.getElementById('booknowBtn').classList.toggle('d-md-inline')
})