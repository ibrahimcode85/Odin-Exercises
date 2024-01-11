const shopList = document.querySelector('ul');
const shopInput = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', saveItem)


function saveItem() {
    listItem = document.createElement('li');
    spanItem = document.createElement('span');
    buttonItem  = document.createElement('button');
    
    listItem.appendChild(spanItem);
    listItem.appendChild(buttonItem);

    spanItem.textContent = shopInput.value;
    
    buttonItem.textContent = 'Delete';
    buttonItem.style.fontSize = '15px';
    buttonItem.style.color = 'black';

    buttonItem.addEventListener('click',deleteItem);
    
    

    shopList.appendChild(listItem);

    shopInput.value = '';
};

function deleteItem() {

};