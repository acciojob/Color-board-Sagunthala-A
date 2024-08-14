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

function changeColor(element) {
    
    element.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;

    setTimeout(() => {
        element.style.backgroundColor = 'rgb(29,29,29)';
    }, 1000); // Revert after 1 second
}

// Create 800 square elements, append them to the container, and add event listeners
for (let i = 0; i < 800; i++) {
  const divElem = createEle('div', 'square');
  container.append(divElem);

  divElem.addEventListener('mouseenter', () => {
    changeColor(divElem)
    // divElem.style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;
    
  });


  
  
}
