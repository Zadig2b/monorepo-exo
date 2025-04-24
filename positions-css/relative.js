const box = document.getElementById('box');
const topRange = document.getElementById('topRange');
const leftRange = document.getElementById('leftRange');
const topValue = document.getElementById('topValue');
const leftValue = document.getElementById('leftValue');

function updatePosition() {
  const top = topRange.value;
  const left = leftRange.value;
  box.style.top = top + 'px';
  box.style.left = left + 'px';
  topValue.textContent = top;
  leftValue.textContent = left;
}

topRange.addEventListener('input', updatePosition);
leftRange.addEventListener('input', updatePosition);

updatePosition(); 

fetch('navbar.html')
.then(res => res.text())
.then(html => {
  document.getElementById('navbar-container').innerHTML = html;
});