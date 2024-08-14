//your JS code here. If required.
const divElem = document.getElementsByClassName("square");


function randomColor() {
    return Math.floor(Math.random() * 255);
  // const randomColorGen = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // return randomColorGen
}
for(let i =0; i< divElem.length; i++){
  
	divElem[i].addEventListener('mouseenter', () => {
    // divElem[i].style.backgroundColor =  randomColorGen();
    divElem[i].style.backgroundColor = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 1)`;
    
    
    
})
  divElem[i].addEventListener('mouseleave',()=>{
    divElem[i].style.backgroundColor = 'rgb(29, 29, 29)'
    divElem[i].style.transition = 'background-color 1s linear'
  })
}

