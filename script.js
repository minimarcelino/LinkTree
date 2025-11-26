const dropdownBtn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
