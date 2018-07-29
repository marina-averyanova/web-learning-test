var buttonAdd    = document.getElementById('btn1');
var buttonRemove = document.getElementById('btn2');
var list         = document.getElementById('list');
var listItems    = list.getElementsByClassName('item');
var emptyAlert   = document.getElementById('empty-alert');
var buttonClose  = document.querySelector('.close');

function changeEmptyAlertVisibility(visibility) {
	emptyAlert.style.display = visibility || 'none';
}

btn1.addEventListener('click', function() {
	changeEmptyAlertVisibility('none');
	var liElement = document.createElement('li');
	liElement.innerHTML = 'Новая задача';
	liElement.className = 'item';
 list.appendChild(liElement);
});

btn2.addEventListener('click', function() {
	list.removeChild(listItems[0]);

	listItems.length || changeEmptyAlertVisibility('block');
});

buttonClose.addEventListener('click', function() {
	changeEmptyAlertVisibility('none');
});


