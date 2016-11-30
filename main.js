$('document').ready(function(){

  var selectLine = function(){
    var rr = $('#selector').val();
    $('.selected').removeClass('selected');
    $('#'+rr).addClass('selected');
  };

  $('#button').on('click', function(event){
    var rr = $('#selector').val();
    if (!rr){ return; }
    var color = $('#player').val();
    if (color){
      $('#'+rr).removeClass('red blue green yellow white black');
      $('#'+rr).addClass(color);
    } else {
      $('#'+rr).removeClass('red blue green yellow white black');
    }
  });

  $('#selector').on('change', function(event){
    selectLine();
  });

  $('path').on('click', function(event){
    $('#selector').val($(this).attr('id'));
    selectLine();
  });

  $('#clear').on('click', function(event){
    $('.selected').removeClass('selected');
  });

});
