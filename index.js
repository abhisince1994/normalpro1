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


// Write your code below:
//getElementByTagName()
const itemlist=document.getElementsByTagName('li');
itemlist[4].style.color='blue';
for(let i=0;i<itemlist.length;i++){
  itemlist[i].style.fontStyle='italic';
}



//use of querySelector() and querySelectorAll()

// Write the code as shown in the video below:
const basketheading=document.querySelector('#basket-heading');
basketheading.style.color='brown';
basketheading.style.marginLeft='30px';

const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='right'

const fruitsitem=document.querySelector('.fruits');
fruitsitem.style.backgroundColor='lightgrey';
fruitsitem.style.padding='30px';
fruitsitem.style.margin='30px';
fruitsitem.style.width='50%';
fruitsitem.style.borderRadius='5px';
fruitsitem.style.listStyleType='none';


const fruitsitems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitsitems.length;i++){
  fruitsitems[i].style.backgroundColor='white';
  fruitsitems[i].style.padding='10px'
  fruitsitems[i].style.margin='10px'
  fruitsitems[i].style.borderRadius='5px';
}

// const evenfruitsitem=document.querySelectorAll('.fruit:nth-child(even)');
// for(let i=0;i<evenfruitsitem.length;i++){
//   evenfruitsitem[i].style.backgroundColor='brown'
// }
const evenFruitsItems = document.querySelectorAll('.fruit:nth-child(even)');

for (let i = 0; i < evenFruitsItems.length; i++) {
    evenFruitsItems[i].style.backgroundColor = 'brown';
    evenFruitsItems[i].style.color = 'white';
  
}



// Write answer to the questions asked below:



//creating elements and dom relation


// Write your code below:
// 1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
const mainHeading = document.getElementById('main-heading');
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';
mainHeading.parentNode.appendChild(subHeading);

// 2. Make the sub-heading text italic.
subHeading.style.fontStyle = 'italic';

// 3. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
const fruitsList = document.querySelector('.fruits');
const totalFruitsParagraph = document.createElement('p');
totalFruitsParagraph.textContent = 'Total fruits: ' + fruitsList.children.length;

// 4. On this paragraph tag set an id of "fruits-total".
totalFruitsParagraph.id = 'fruits-total';
fruitsList.parentNode.insertBefore(totalFruitsParagraph, fruitsList);
