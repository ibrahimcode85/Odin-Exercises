const shopList = document.querySelector('ul');
const shopInput = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', saveItem)


function saveItem() {
    let id = document.getElementsByTagName('li').length + 1;
    let itemId = `item${id}`;

    listItem = document.createElement('li');
    spanItem = document.createElement('span');
    buttonItem  = document.createElement('button');
    
    listItem.setAttribute('id', itemId);
    listItem.appendChild(spanItem);
    listItem.appendChild(buttonItem);

    spanItem.textContent = shopInput.value;
    
    // add event listener to delete based on itemid. eg delete parent ul, child li with id = button 1.
    buttonItem.setAttribute('id', `delete`)
    buttonItem.textContent = 'Delete';
    buttonItem.style.fontSize = '15px';
    buttonItem.style.color = 'black';
    
    shopList.appendChild(listItem);

    shopInput.value = '';
    shopInput.focus();
};

function listItemClickHandler(e) {
    const li = e.target.closest('li'); // e represent en event. so e.target will identify which button is triggering an event.
                                       // use closest method to find the closest 'li' element from the button.
    
    if(!li) return;
    
    if (e.target.matches('#delete')) { // this handler is added to the parent 'ul'. so any click on the child of 'ul' can be listened
                                       // use .mathces method so that we can specify only click on element with id 'delete' will trigger the deletion
      li.remove();
    };  
  }
  
  shopList.addEventListener("click", listItemClickHandler);