document.addEventListener('DOMContentLoaded', function () {
  var chips = document.querySelectorAll('.chip');
  var drawings = document.querySelectorAll('.drawing');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');

      var filter = chip.getAttribute('data-filter');

      drawings.forEach(function (d) {
        if (filter === 'all' || d.getAttribute('data-category').indexOf(filter) !== -1) {
          d.classList.remove('is-hidden');
        } else {
          d.classList.add('is-hidden');
        }
      });
    });
  });
});
