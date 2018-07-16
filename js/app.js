const menuIcon = document.querySelector('.fa-bars');

const toggleSidebar = () => {
  document.querySelector('.side-nav').classList.toggle('active');
}

menuIcon.addEventListener('click', toggleSidebar);
