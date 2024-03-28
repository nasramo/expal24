$(document).ready(function(){
  $('[data-toggle="popover"]').popover({
      container: 'body'
  });
}); 
$('.popover-dismiss').popover({
  trigger: 'focus'
});
$(document).ready(function(){
    $("#myModal").modal('show');
});
jQuery(document).ready(function($) {
  if ($.cookie("cacher-modal")) {
    $("#myModal").modal("dispose");
  } else {
    $("#myModal").modal("show");
  }

  $("#modalno").click(function() {
    if ($(this).is(":checked")) {
        $("#myModal").modal("dispose");
        $.cookie("cacher-modal", true);
    } else {
      $.cookie("cacher-modal", false);
    }
  })
});
