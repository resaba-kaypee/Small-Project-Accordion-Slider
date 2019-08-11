$(function(){
  // let icons = {
  //   header: "ui-icon-circle-arrow-e",
  //   activeHeader: "ui-icon-circle-arrow-s"
  // };
  // $( "#accordion" ).accordion({
  //   icons: icons
  // });

  const action = "click";
  const speed = 500;

  $('h3').on(action, function(){
    $(this).next()
    .slideToggle(speed)
    .siblings('div')
    .slideUp(speed);
    //rotate icon for active section
    const img = $(this).children('img');
    $('img').not(img).removeClass('rotate');
    img.toggleClass('rotate');
  })

})