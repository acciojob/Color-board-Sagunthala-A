// Function to create elements with a specific tag and class
function createEle(tagNam, classNam) {
  let ele = document.createElement(tagNam);
  ele.setAttribute('class', classNam);
  return ele;
}

// Create a container and append it to the body
const container = createEle('div', 'container');
document.body.appendChild(container);

// Function to generate a random color value
function randomColor() {
  return Math.floor(Math.random() * 255);
}

// Create 800 square elements, append them to the container, and add event listeners
for (let i = 0; i < 800; i++) {
  const divElem = createEle('div', 'square');
  container.append(divElem);

  divElem.addEventListener('mouseenter', () => {
    divElem.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;
    divElem.style.transition = '';
  });

  divElem.addEventListener('mouseleave', () => {
    divElem.style.backgroundColor = 'rgb(29, 29, 29)';
    divElem.style.transition = 'background-color 1s linear';
  });
}
