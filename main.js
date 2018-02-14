console.warn('I\'ve become self aware.');

function activateBurger() {
  document.getElementById('menu').classList.toggle('closed');
  document.querySelector('header .burger').classList.toggle('hide');
  document.querySelector('#topbar').classList.toggle('hide');
}

function topBarToggle() {
  if (window.scrollY > 70) {
    document.getElementById('topbar').classList.remove('top');
  } else {
    document.getElementById('topbar').classList.add('top');
  }
}

function videoSizing() {
  let vid = document.querySelector('#shortvideo iframe');
  let vidw = vid.clientWidth;
  let vidh = vidw * 9 / 16;
  vid.style.height = vidh + 'px';
}

document.querySelector('#menu .burger.close').addEventListener('click', activateBurger);
document.querySelector('header .burger').addEventListener('click', activateBurger);

window.addEventListener('scroll', topBarToggle);

var menulinks = document.querySelectorAll('#menu li a');
[].forEach.call(menulinks, (link) => {
  link.addEventListener('click', activateBurger);
});

window.addEventListener('resize', videoSizing);

videoSizing();