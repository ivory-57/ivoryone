const cat = document.querySelector('#cat');
const bubble = document.querySelector('#bubble');
const mood = document.querySelector('#mood');
const energy = document.querySelector('#energy');
let energyValue = 80;
let timer;
const idleLines = ['奶盖在看你', '奶盖想贴贴', '哼，才没有等你', '奶盖今天也很可爱'];

function speak(text) {
  bubble.textContent = text;
  bubble.classList.add('visible');
  clearTimeout(timer);
  timer = setTimeout(() => bubble.classList.remove('visible'), 1800);
}

cat.addEventListener('click', () => {
  cat.classList.remove('happy');
  void cat.offsetWidth;
  cat.classList.add('happy');
  mood.textContent = Math.random() > .35 ? '心情：被摸到了' : '心情：哼，才没有开心';
  energyValue = Math.max(0, energyValue - 1);
  energy.textContent = `体力：${energyValue}`;
  speak(Math.random() > .35 ? '喵～再摸一下' : '才、才不是在等你');
});

setTimeout(() => speak('奶盖在看你'), 500);
setInterval(() => {
  if (!bubble.classList.contains('visible')) {
    speak(idleLines[Math.floor(Math.random() * idleLines.length)]);
  }
}, 9000);
