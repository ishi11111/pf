//亀をクリックするとアニメーションする
$('#kame').on('click', function () {
  $('#kame')
    .animate({ left: 1000 }, 10000)
    .delay(10000)
    .queue(function () {
      $('#kame img')
        .css('transform', 'scale(-1 , 1)')
      $('#kame').dequeue();
    })
    .animate({ left: '-=800', top: 400 }, 10000);
  $('#okaki1')
    .animate({ left: 1000 }, 10000)
    .fadeOut(5000)
    .animate({ left: '-=450', top: 100 }, 100)
    .fadeIn(5000)
    .animate({ left: '-=760', top: 400 }, 10000)
    .fadeOut(5000);
});

//背景のアニメーション
bubbly({
  colorStart: '#fff4e6',
  colorStop: '#ffe9e4',
  blur: 1,
  compose: 'source-over',
  bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
});


