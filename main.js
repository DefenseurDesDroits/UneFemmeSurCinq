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
  let vid1 = document.querySelector('#shortvideo iframe');
  let vid1w = vid1.clientWidth;
  let vid1h = vid1w * 9 / 16;
  vid1.style.height = vid1h + 'px';

  let vid2 = document.querySelector('#itw1-30 iframe');
  let vid2w = vid2.clientWidth;
  let vid2h = vid2w * 9 / 16;
  vid2.style.height = vid2h + 'px';
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