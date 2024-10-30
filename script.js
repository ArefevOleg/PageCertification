document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('nav a');

  anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          const targetHeading = targetSection ? targetSection.querySelector('.title') : null;

          if (targetHeading) {
              // Изменение цвета заголовка на секунду
              targetHeading.style.textShadow = '2px 2px 5px rgb(241, 210, 12)';
              setTimeout(() => {
                  targetHeading.style.textShadow = '';
              }, 1500);

              // Плавный скроллинг
              targetSection.scrollIntoView({
                  behavior: 'smooth'
              });
          }

          // Проверка, является ли элемент подменю
          const submenu = this.nextElementSibling;
          if (submenu && submenu.classList.contains('submenu')) {
              e.stopPropagation();
              submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
          }
      });
  });
});
