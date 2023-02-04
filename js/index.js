$(".answers .true-false > *").on('click', function (e) {
  $(this).parent().children().removeClass('selected');
  $(this).addClass('selected');
});

$(".answers .qcm:not(.multiple) > *").on('click', function (e) {
  console.log(this);
  $(this).parent().children().removeClass('selected');
  $(this).addClass('selected');
});

$(".answers .qcm.multiple > *").on('click', function (e) {
  if(!$(this).hasClass('selected')) {
    $(this).addClass('selected');
  } else {
    $(this).removeClass('selected');
  }
});

