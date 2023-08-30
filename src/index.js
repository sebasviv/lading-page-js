import './styles/index.scss';


const hamburguerMenu = document.getElementById('hamburger-menu');

hamburguerMenu.addEventListener('click', () => { 
    const menu = document.getElementById('hamburger-menu-content')
    menu.style.display = 'flex';
});

const closeButtonMenu = document.getElementById('close-btn-menu');

closeButtonMenu.addEventListener('click', () => { 
    const menu = document.getElementById('hamburger-menu-content')
    menu.classList.add('slide-out-right');
    setTimeout(() => {
        menu.style.display = 'none';
        menu.classList.remove('slide-out-right');
    }, 1000);
});

