$(function(){
    
  $('#main_wrapper').hover(
      function() {
       $('#m_text').fadeIn();  
      },
      function() {
       $('#m_text').fadeOut();      
      }
      );   
      
    
  $('#find').click(function(){
    $('#wrapper').find('a').css('color', 'pink');     
  });  
 
  $('#children').click(function(){
    $('#wrapper').children('a').fadeOut();   
  });   
    
    // 以下で、hideメソッドを用いて<h1>要素を隠す
//   $('h1').hide();
  // 以下で、slideUpメソッドを用いて<p>要素を隠す
  $('#img_1').slideUp(500);
  // 以下で、fadeOutメソッドを用いて<img>要素を隠す
  $('#img_2').fadeOut(500);
  
  $('#show').show(1000);
  $('#fadeIn').fadeIn(1000);
  
  $('#btn_text').click(function(){
      $('#text').slideUp();
  });
  
  $('#btn_css').click(function(){
      $('#css_text').css('color', 'red');
      $('#css_text').css('font-size', '50px');
  });
  
  $('#btn_text_2').click(function(){
      $('#text_2').text('気分上々↑↑');
  });
  $('#btn_html').click(function(){
      $('#text_2').html('<a href="#">ここをクリックして最高の気分を味わおう！</a>')
  });
  
  
  $('.list-item').click(function(){
    $(this).css('color', 'red');
  });
  
  
  
    
    
});
