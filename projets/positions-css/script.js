let shapeCounter = 1;

function changePosition(id, newPosition) {
  const element = document.getElementById(id);
  const positions = ['static', 'relative', 'absolute', 'fixed', 'sticky'];

  // Retire toutes les classes de position
  positions.forEach(pos => element.classList.remove(pos));

  // Applique la nouvelle classe
  if (positions.includes(newPosition)) {
    element.classList.add(newPosition);
  }
}

function resetPositions() {
  const positions = ['static', 'relative', 'absolute', 'fixed', 'sticky'];
  const shapes = document.querySelectorAll('.shape');

  shapes.forEach(shape => {
    positions.forEach(pos => shape.classList.remove(pos));
    shape.classList.add('static');

    const select = shape.querySelector('select');
    if (select) {
      select.value = 'static';
    }
  });
}

function addShape() {
  const container = document.getElementById('container');
  const shapeId = `shape-${shapeCounter++}`;
  const colors = ['green', 'orange', 'pink', 'teal', 'brown'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const isCircle = Math.random() > 0.5;

  const shapeWrapper = document.createElement('div');
  shapeWrapper.className = 'shape-container';

  const shapeDiv = document.createElement('div');
  shapeDiv.className = `shape static`;
  shapeDiv.id = shapeId;
  shapeDiv.style.backgroundColor = color;
  if (isCircle) {
    shapeDiv.style.borderRadius = '50%';
  }

  const select = document.createElement('select');
  select.innerHTML = `
    <option value="static">static</option>
    <option value="relative">relative</option>
    <option value="absolute">absolute</option>
    <option value="fixed">fixed</option>
    <option value="sticky">sticky</option>
  `;
  select.onchange = () => changePosition(shapeId, select.value);

  shapeDiv.appendChild(select);
  shapeWrapper.appendChild(shapeDiv);
  container.appendChild(shapeWrapper);
}

function deleteAddedShapes() {
    const allContainers = document.querySelectorAll('.shape-container');
  
    allContainers.forEach(container => {
      if (container.dataset.fixed !== "true") {
        container.remove();
      }
    });
  }

  fetch('navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html;
  });