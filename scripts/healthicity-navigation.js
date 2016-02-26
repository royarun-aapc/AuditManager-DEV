function navInit() {
  $('.primary-nav-toggle').click(function(){
    $('body').toggleClass('nav-open');
  })

  // scripts to open and close the secondary navigation
  $('.secondary-nav-toggle').click(function(event) {
    $('nav.secondary').toggleClass('open');
  });
}
