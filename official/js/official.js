$(document).ready(function(){
  $('.tab-a').eq(0).addClass('a-active');
  $('.tab-a').on('click',function(){
    $('.tab-a').removeClass('a-active');
    $(this).addClass('a-active');
  });
  $('#vedio_btn').on('click',function(){
    $('.vedio-box').show(600);
  });
  $('#vedio-off').on('click',function(){
    $('.vedio-box').hide(400);
  });
  $(function () {
    $('#dg-container').carrousel({
      current: 0,
      autoplay: true,
      interval: 3000
    });
  });

  //品牌翻转
  var turn = function(target,time,opts){
    target.find('.img-elip').hover(function(){
      $(this).find('elip1').stop().animate(opts[0],time,function(){
        $(this).hide().next().show();
        $(this).next().animate(opts[1],time);
      });
    },function(){
      $(this).find('.info').animate(opts[0],time,function(){
        $(this).hide().prev().show();
        $(this).prev().animate(opts[1],time);
      });
    });
  }
  var verticalOpts = [{'width':0},{'width':'180px'}];
  turn($('#vertical'),100,verticalOpts);
});
