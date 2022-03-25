// DOM Variables
const d = document,
  $navigation = d.getElementsByClassName('navigation')[0],
  $menuToggle = d.getElementById('menu-toggle');

console.log($navigation);
// -*************************************************************************-

// Events
d.addEventListener('click', (e) => {
  // Add class 'active' to menu button when clicking
  if (e.target === $menuToggle) {
    $navigation.classList.toggle('active')
  }
})