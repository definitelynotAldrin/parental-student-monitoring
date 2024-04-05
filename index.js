 /*Navigation bar*/
 window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })

    document.addEventListener('DOMContentLoaded', function () {
        const burgerMenu = document.querySelector('.burger-menu');
        const navbar = document.getElementById('navbar');


        burgerMenu.addEventListener('click', function () {
            navbar.querySelector('ul').classList.toggle('show');
        });
    });

/*Frequently asked questions*/
document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
      item.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
  });