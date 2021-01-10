var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems);

//ADD ITEMS
function addItem(e){
    e.preventDefault();
    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create del btn element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    //Add li to ul-list
    itemList.appendChild(li);
};

//REMOVE ITEMS
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if (confirm('Czy na pewno?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        };
    };
};

//FILTERING
function filterItems(e){
//convert to lowercase
var text = e.target.value.toLowerCase();
//get list
var items = itemList.getElementsByTagName('li');
//convert to arr
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) !=-1) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
})
};