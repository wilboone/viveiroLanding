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

overlay.addEventListener('click', function (e) {
  e.preventDefault();
  info.classList.add('hidden');
  overlay.classList.add('hidden');
});

/// mapa

/// -16.573901, -39.583073
const latitude = -16.573901;
const longitude = -39.583073;

const mapa = L.map('mapa').setView([latitude, longitude], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(mapa);

L.marker([latitude, longitude])
  .addTo(mapa)
  .bindPopup('Nossa localização')
  .openPopup();
