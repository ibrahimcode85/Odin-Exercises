// add a red text
const container = document.querySelector('#container');
const content = document.createElement('p');

content.textContent = "Hey I'm red.";
content.style.cssText = 'color: red;'
container.appendChild(content);

//add an h3 blue text
const contentH3 = document.createElement('h3');

contentH3.textContent = "I'm a blue h3.";
contentH3.style.color = 'blue';
container.appendChild(contentH3);

//add a new div
const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';

//add elements to the new div
const contentDivH1 = document.createElement('h1');
contentDivH1.textContent = "I'm in a div."

const contentDivP = document.createElement('p');
contentDivP.textContent = "Me too!."

div.appendChild(contentDivH1);
div.appendChild(contentDivP);

// container.appendChild(div);
document.body.appendChild(div);