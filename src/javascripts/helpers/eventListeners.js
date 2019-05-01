
const sizeIncrease = () => {
  $('#largeText').change(() => {
    if ($(this).is(':checked')) {
      $('body').addClass('largeText');
    } else {
      $('body').removeClass('largeText');
    }
  });
};

const init = () => {
  sizeIncrease();
};

init();
