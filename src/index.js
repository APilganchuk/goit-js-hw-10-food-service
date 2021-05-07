import menuItemHbs from './templates/menu-item.hbs';
import menuData from './menu.json';
import './styles.css';
import './localsorage';

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