$('#navButton').on('click', function(e) {
  $('#navButton').toggleClass("-active");
  $('#navigation').toggleClass("-on");
  e.preventDefault();
});