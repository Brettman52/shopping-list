function handleSubmit() {
 
    //When submit button is clicked, add the item typed in the box to the list. 
    //Prevent the form from trying to send to a database with preventDefault. 
    //Clear the text box after the item is added to the list.
    $("button[type='submit']").on('click', function(event) {
     event.preventDefault();
   
        let addItem = document.getElementById("shopping-list-entry").value;
   
   
  
   $(".shopping-list").append('<li><span class="shopping-item">' + addItem + '</span><div class="shopping-item-controls">' + 
    '<button class="shopping-item-toggle"><span class="button-label">check</span></button> ' +
    ' <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>')
   
   $("input[type=text]").val('');
     
     });
   
     //Same function as above, with the exception that the even that is being 
     //listened for is a press of the enter key rather than a click.
    $("button[type='submit']").keypress(function(event) {
     event.preventDefault();
   
        let addItem = document.getElementById("shopping-list-entry").value;
   
   
   
   $(".shopping-list").append('<li><span class="shopping-item">' + addItem + 
    '</span><div class="shopping-item-controls"><button class="shopping-item-toggle">' + 
    '<span class="button-label">check</span></button> <button class="shopping-item-delete">' + 
    '<span class="button-label">delete</span></button></div></li>')
   
    $("input[type=text]").val('');
     
     });
     
   
   //Upon clicking the "check" button, add a strikethrough to the item
   //located at the target of the cilck.
   $('ul').on('click',"button[class='shopping-item-toggle']", function(event) {
     $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
   
     }); 
   
   //Upon clicking the "delete" button, remove the entire item from the DOM.
    $('ul').on('click',"button[class='shopping-item-delete']", function(event) {
       $(event.currentTarget).closest('li').remove();
     });
   }
   $(handleSubmit);
   
   
  
