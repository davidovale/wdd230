const list = document.querySelector('ul');
const input = document.querySelector('#item');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    let myItem = input.value;
    input.value = '';
  
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    let listBtn = document.createElement('button');
    //listBtn.setAttribute('name', 'btn_delete');
  
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = '❌ Remove '+myItem;
    list.appendChild(listItem);
  
    listBtn.onclick = function(e) {
        list.removeChild(listItem);
      }
  
    input.focus();
})

