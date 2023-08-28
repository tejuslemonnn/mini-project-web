$('#about').on('show.bs.collapse', function () {

  $('#skills').collapse('hide');
  $('#projects').collapse('hide');

});

$('#skills').on('show.bs.collapse', function () {

  $('#about').collapse('hide');
  $('#projects').collapse('hide');

});

$('#projects').on('show.bs.collapse', function () {

  $('#about').collapse('hide');
  $('#skills').collapse('hide');

});