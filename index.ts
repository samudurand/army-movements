// Import stylesheets
import anime from 'animejs/lib/anime.es.js';
import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1><div id="container"></div>`;

///////////////////////////////////

anime({
  targets: '#square',
  translateX: 200,
  translateY: 200,
  backgroundColor: '#FFF',
  easing: 'linear',
  duration: 2000
});

//////////// With animation

// var amplitude = 100;
// var period = 2000;
// // in ms
// var centerX = stage.width() / 2;

// var anim = new Konva.Animation(function (frame) {
//   circle.x(
//     amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
//   );
// }, layer);

// anim.start();

///////////// with tween

// circle.to({
//   duration : 3,
//   x: stage.width() / 4
// });

