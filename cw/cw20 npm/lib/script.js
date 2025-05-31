'use strict';

let buttonEl = $('.btn-primary');
buttonEl.on('click', function (e) {
  console.log('click');
});
[1, 2, 3].map(el => el * 2);
/abc/.test('abv');