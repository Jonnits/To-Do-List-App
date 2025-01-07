
function newItem(){

  // Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
      } else {
    $('#list').append(li);
    $('input').val('');
      }

  // Crossing out list items:
  function crossOut() {
    li.toggleClass("strike");
      }
    
    li.on("dblclick", function crossOut() {
      li.toggleClass("strike");
      });
    
  // Adding the delete button: 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    crossOutButton.on("click", deleteListItem);
    function deleteListItem(){
      li.addClass("delete")
      }

  // Reordering the items: 
    $('#list').sortable();
  
    }
  
  // Allowing items to be added with Enter key
$('#input').on("keypress", function (event) {
  if (event.which === 13) { 
    event.preventDefault();
    newItem();
  }
});