import './styles.css';
import menuItemHbs from './templates/menu-item.hbs';
import menuData from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuMarcup = createMenuMarcup(menuData);

menuContainer.insertAdjacentHTML('beforeend', menuMarcup);

function createMenuMarcup(menuData) {
    return menuItemHbs(menuData);
}

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const checkboksRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

checkboksRef.addEventListener('change', onCheckboksStatusChange);

if (localStorage.getItem(STORAGE_KEY) === null) {
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
}
bodyRef.classList = localStorage.getItem(STORAGE_KEY);
if (localStorage.getItem(STORAGE_KEY) === Theme.DARK) {
    checkboksRef.checked = true;
}

function onCheckboksStatusChange() {
    if (checkboksRef.checked === true) {
        if (bodyRef.classList.contains(Theme.LIGHT)) {
            bodyRef.classList.remove(Theme.LIGHT);
        }
        bodyRef.classList.add(Theme.DARK);
        checkboksRef.setAttribute('checked', true);
        localStorage.setItem(STORAGE_KEY, bodyRef.classList);
    } else {
        if (bodyRef.classList.contains(Theme.DARK)) {
            bodyRef.classList.remove(Theme.DARK);
        }
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem(STORAGE_KEY, bodyRef.classList);
    }
}
