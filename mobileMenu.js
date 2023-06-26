const bars = document.querySelector('.fa-bars');
const list = document.querySelector('.menu-list');
const close = document.querySelector('.close');
const navItems = document.querySelectorAll('.menu-list ul li');

const showMenu = () => {
  bars.style.display = 'none';
  close.style.transform = 'translateY(0)';
  list.style.transform = 'translateY(0)';
};
const hideMenu = () => {
  list.style.transform = 'translateX(-100%)';
  bars.style.display = 'block';
  close.style.transform = 'translateX(-25rem)';
};

bars.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
navItems.forEach((item) => {
  item.addEventListener('click', hideMenu);
});