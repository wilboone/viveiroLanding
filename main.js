'use strict';

const info = document.querySelector('.info');
const btn = document.querySelector('.btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.btn--close');
/// listener do botao info

btn.addEventListener('click', function (e) {
  e.preventDefault();
  info.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

close.addEventListener('click', function (e) {
  e.preventDefault();
  info.classList.add('hidden');
  overlay.classList.add('hidden');
});
