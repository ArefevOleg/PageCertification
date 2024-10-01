document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const targetHeading = targetSection.querySelector('.title');

    // Изменение цвета заголовка на секунду
    targetHeading.style.textShadow= '2px 2px 5px rgb(241, 210, 12)';
    setTimeout(() => {
      targetHeading.style.textShadow = '';
    }, 1500);

    // Плавный скроллинг
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});