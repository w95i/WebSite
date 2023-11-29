var menuIcon = document.getElementById('menu-icon');
    var sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', function () {
        if (sidebar.style.width === '300px') {
            sidebar.style.width = '0';
        } else {
            sidebar.style.width = '300px';
        }
    });

    document.addEventListener('click', function (event) {
        var isClickInsideSidebar = sidebar.contains(event.target);
        var isClickOnMenuIcon = (event.target === menuIcon);

        if (!isClickInsideSidebar && !isClickOnMenuIcon) {
            sidebar.style.width = '0';
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.getElementById("scrolling");
  
      window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
              navbar.classList.add("scrolled");
          } else {
              navbar.classList.remove("scrolled");
          }
      });
  });
  