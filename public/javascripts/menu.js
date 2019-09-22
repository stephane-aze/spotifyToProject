$(document).ready(() => {
  const element = $('meta[name="active-menu"]').attr('content');
  $(`#${element}`).addClass('active');
});
