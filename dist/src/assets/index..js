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

const dropDownButton = document.getElementById('dropdown-custom');
dropDownButton.addEventListener('click', () => {
    const inputsGroup = document.getElementById('inputs-group-header');
    inputsGroup.style.display = "flex";
});


const logInButton = document.getElementById('btn-login');

logInButton.addEventListener('click', () => {
    const form = document.getElementById('login-form');
    form.style.display = "block";
});

const closeButtonForm = document.getElementById('btn-close-login-form');
closeButtonForm.addEventListener('click', () => {
    const form = document.getElementById('login-form');
    form.style.display = "none";
});