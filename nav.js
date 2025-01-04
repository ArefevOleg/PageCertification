document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          const submenu = item.querySelector('.submenu');
          if (submenu) {
              submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          }
      });
  });
});