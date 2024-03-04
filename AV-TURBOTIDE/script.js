
  document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
});
