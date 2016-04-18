var gallaryName = ['阿波羅畫廊'
,'東之畫廊'
,'傳承藝術中心'
,'首都藝術中心'
,'協民國際藝術'
,'朝代畫廊'
,'晴山藝術中心'
,'索卡藝術'
,'敦煌畫廊'
,'鶴軒藝術 HoHoArts'
,'觀想藝術中心'
,'德鴻畫廊'
,'雅逸藝術中心'
,'東門美術館'
,'黎畫廊'
,'家畫廊'
,'現代畫廊'
,'琢璞藝術中心'
,'赤粒藝術'
,'誠品畫廊'
,'秋刀魚藝術中心'
,'哥德藝術中心'
,'大未來林舍畫廊'
,'科元藝術中心'
,'形而上畫廊'
,'Nou Gallery 新畫廊'
,'也趣藝廊'
,'AKI Gallery 也趣藝廊'
,'雲清藝術中心'
,'泰郁 美學．堂'
,'Da Xiang Art Space'
,'國泰世華藝術中心'
,'名山藝術 Mingshan Art'
,'1839當代藝廊'
,'土思藝術'
,'漢鄉藝術'
,'青雲畫廊 Cloud Gallery'
,'尊彩藝術中心'
,'南畫廊'
,'絕版影像館'
,'名冠藝術館SUNNY ART MUSEUM'
,'大河美術·一館'
,'大河美術·二館'
,'加力畫廊'
,'敦煌藝術中心'
,'采泥藝術'
,'涵藝術經紀公司 Han Art Agency Ltd.'
,'穎川畫廊'
,'ARTDOOR藝境畫廊'
,'飛皇畫廊'
,'谷公館 Michael Ku Gallery'
,'僑福芳草地畫廊．台北 Parkview Green Art Taipei'
,'Bluerider art gallery 藍騎士藝術空間'
,'X by Bluerider'
,'小畫廊'
,'恆畫廊'
,'博藝畫廊 BO ART GALLERY'
,'伊日藝術 YIRI ARTS'
,'一票人票畫空間 & 畫庫'
,'Art Space 金魚空間'
,'荷軒新藝空間'
,'大美無言藝術空間'];
$.ajax({
  type: "get",
  async: false,
  url: "http://artsdealer.net/artpp/webapi_site/expo_list?callback=test",
  dataType: "jsonp",//指定以jsonp方式執行
  success: function(res){
    var data = res.responseData;
    for(var i in data){
      for(var k in gallaryName){
        if(data[i].galleryName == gallaryName[k]){
          var html = "<li><div><a ><img class='img' src='"+data[i].imgUrl+"'></a><div class='imfomation'><h4 class='title'>"+data[i].titleCH+"</h4><p>展覽名(英): "+data[i].titleEN+"</p><p>日期: "+data[i].duration+"</p><p>展覽地點: "+data[i].galleryName+"</p><p>展覽地址:<br />"+data[i].venueAddr+"</p><p>畫廊名稱: "+data[i].galleryName+"</p></div></div></li>";
          $('#sb-slider').append(html);
          if(i == 0){
            $('#nav-dots').append("<span class='nav-dot-current'></span>");
          }else{
            $('#nav-dots').append("<span></span>");
          }
          break;
        }
      }
    }
    doInit();
  },
  error: function(){
    console.log('讀取ＡＰＩ資料錯誤');
  }  
});



var doInit = function(){
  var Page = (function() {

    var navArrows = $( '#nav-arrows' ).hide(),
      navDots = $( '#nav-dots' ).hide(),
      nav = navDots.children( 'span' ),
      shadow = $( '#shadow' ).hide(),
      slicebox = $( '#sb-slider' ).slicebox( {
        onReady : function() {

          navArrows.show();
          navDots.show();
          shadow.show();

        },
        onBeforeChange : function( pos ) {

          nav.removeClass( 'nav-dot-current' );
          nav.eq( pos ).addClass( 'nav-dot-current' );

        }
      } ),
      
      init = function() {

        initEvents();
        
      },
      initEvents = function() {

        // add navigation events
        navArrows.children( ':first' ).on( 'click', function() {

          slicebox.next();
          return false;

        } );

        navArrows.children( ':last' ).on( 'click', function() {
          
          slicebox.previous();
          return false;

        } );

        nav.each( function( i ) {
        
          $( this ).on( 'click', function( event ) {
            
            var dot = $( this );
            
            if( !slicebox.isActive() ) {

              nav.removeClass( 'nav-dot-current' );
              dot.addClass( 'nav-dot-current' );
            
            }
            
            slicebox.jump( i + 1 );
            return false;
          
          } );
          
        } );

      };

      return { init : init };

  })();

  Page.init();
};