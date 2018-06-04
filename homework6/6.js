
$(document).ready(function(){        //버튼 누르면 상자 나타나게 함
    $("#add").click(function(){ 
    }); 
    $("#colors").click(function(){
    });
});
 


$(document).ready(function(){      //상자 누르면 없어지게함
    $('.square').click(function(){
        $('.square').html.hide();
    });
});  

$( function() {                   //상자 누르고 옮길 수 있게 함
    $( '.square' ).html.draggable();
    $( '.square' ).html.droppable({
      drop: function( event, ui ) {
        $( '.square' )
          .addClass( "ui-state-highlight" )
      }
    });
  });

$('.squre').trigger("drag"). //이걸써야하나//