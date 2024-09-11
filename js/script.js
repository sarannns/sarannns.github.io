function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var encEmail = "c2FyYW5yYWpfbm5zQG91dGxvb2suY29t";
const form = document.getElementById("email_contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));

var typed = new Typed(".multiple-text",
  {
    strings: ["Machine Learning Developer",
      "Research Software Engineer", "Weiqi Player", "Cricketer"],
    typeSpeed: 100, backSpeed: 50,
    backDelay: 1000, loop: true
  });

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#312a2a" }, "shape": {
      "type": "circle", "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 }
    },
    "opacity": { "value": 1, "random": false, "anim": { "enable": false, "speed": 0.1, "opacity_min": 0.1, "sync": false } },
    "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 1, "size_min": 0.2, "sync": false } },
    "line_linked": { "enable": true, "distance": 150, "color": "#726a6a", "opacity": 0.4, "width": 1 },
    "move": {
      "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out",
      "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },
  "interactivity": {
    "detect_on": "canvas", "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }, "resize": true
    }, "modes": {
      "grab": {
        "distance": 400,
        "line_linked": { "opacity": 1 }
      }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
      "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  }, "retina_detect": false
}); var count_particles,
  stats, update;
stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin(); stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update);
}; requestAnimationFrame(update);;