 // Smooth scrolling for navigation

       
            function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

        document.addEventListener('DOMContentLoaded', function() {
      const links = document.querySelectorAll('a[data-scroll-to]');
      links.forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const sectionId = link.getAttribute('data-scroll-to');
          scrollToSection(sectionId);
        });
      });
    });