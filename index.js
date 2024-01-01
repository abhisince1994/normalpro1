// Write your code below:
//getElemntById()
const newHeading = document.getElementById('main-heading');
newHeading.textContent='Fruit World'
newHeading.style.color='orange'

const header=document.getElementById('header');
header.style.backgroundColor='green'
header.style.borderBottom='3px solid orange';

const basketheading=document.getElementById('basket-heading');
basketheading.style.color='green'

const thanks=document.getElementById('thanks');
thanks.innerHTML='<p>Please visit us again</p>';
thanks.style.fontWidth='bold';

// Write your code below:
//use of getElementsByClassNamegi
const fruit=document.getElementsByClassName('fruit');
console.log(fruit[1]);
fruit[2].style.backgroundColor='yellow'
//fruit[2].style.fontWidth='bold'
for(let i=0;i<fruit.length;i++){
  fruit[i].style.fontWeight = 'bold';
}