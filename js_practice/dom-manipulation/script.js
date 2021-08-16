const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
const redP = document.createElement('p');
redP.textContent = 'Hey I‘m red!';
redP.style.color = 'red';
container.appendChild(redP);

//an <h3> with blue text that says “I’m a blue h3!”
const blueH = document.createElement('h3');
blueH.textContent = 'I‘m a blue h3!';
blueH.style.color = 'blue';
container.appendChild(blueH);

//a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement('div');
div.style.borderColor = 'black';
div.style.backgroundColor = 'pink';
//another <h1> that says “I’m in a div”
const divH = document.createElement('h1');
divH.textContent = 'I‘m in a div';
div.appendChild(divH);
//a <p> that says “ME TOO!”
const divP = document.createElement('p');
divP.textContent = 'ME TOO!';
div.appendChild(divP);
//Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(div);