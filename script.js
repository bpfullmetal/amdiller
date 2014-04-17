$('.galleryMenuItem.1').addClass("selected");
var headerWidth = $('header').width();
var winHeight = $(window).height();
var winWidth = $(window).width();
var originalHeight = $('.comImage').height();
var originalWidth = $('.comImage').width();
var difference = 0;
var pageNumber = 0;
var holderCount = $('.comImage').length;
		$('.buttons').hide();
		$('.galleryMenu').hide();

	$(window).load(function(){
	$('.loader').hide();
		$('.comImage img').each(function(){
	    if (($('.comImage').width()/$('.comImage').height()) < ($(this).width()/$(this).height())) {
          $(this).css({'height':'100%','width':'auto'});
        } else {
          $(this).css({'width':'100%','height':'auto'});
        }
        });
		$('.buttons').fadeIn();
		$('.galleryMenu').fadeIn();
	});
	
        $('.fullGallery').css('width', winWidth - headerWidth+'px');
	    $('.fullGallery').css('height', winHeight+'px');
        $('.comImage').css('width', winWidth - headerWidth+'px');
	    $('.comImage').css('height', winHeight+'px');
	    $('.galleryImageHolder').css('height', winHeight);
	    var originalWidth = $('.comImage').width();
	    $('.galleryImageHolder').css('width', (holderCount*originalWidth)+'px');

	    
	    	   var piCount = ($('.pageImages').length)+1;
		
	    
	    	
	    for(var i=1; i<piCount; i++){
	    	var divName = '.pageImages'+'.'+i+' '+'img';
	    	var menuCount = ($(divName).length);
	    	var galleryItemDiv = '.galleryMenuItem'+'.'+i;
	    	//console.log(galleryItemDiv);
	    	
	    	
	    	
	    	$(galleryItemDiv).click(function(){
	    		var currentDiv = $(this).attr('class');
	    		var array = currentDiv.split(' ');
	    		var index = array[1];
	    		$('.galleryMenuItem').removeClass('selected');
	    		$('.galleryMenuItem'+'.'+index).addClass("selected");
	    		var position = $('.galleryImageHolder').position();
	    		var positionLeft = position.left;
	    		var currentPage = $('.pageImages'+'.'+index);
	    		var currentPageOffset = currentPage.offset();
	    		var currentPageOffsetLeft = currentPageOffset.left;
	    		var currentImageLength = $('.pageImages'+'.'+index+' '+'img').length;
	    		var moveAmount = (currentPageOffsetLeft - positionLeft)-headerWidth;
	    		//console.log(currentPageOffsetLeft);
	    		//console.log(positionLeft);
	    		//console.log(moveAmount);
	    		//var distanceFromOrigin = position - sumOfImages;
	    		 //console.log(sumOfImages);
	    		 if(moveAmount == (positionLeft*-1)){
	    		 }else{
	    		var direction = '';
	    			if ((positionLeft)<=(currentPageOffsetLeft)){
		    			direction = '-';
	    			}else{
		    			direction = '+';
	    			}
	    			//console.log(direction);
		    	$('.galleryImageHolder').animate({left: (direction+(moveAmount))+'px'}, function(){
			    	var position = $('.galleryImageHolder').position();
			    	var positionLeft = position.left;
			    	var originalWidth = $('.comImage').width();
			    	var newNumber = parseInt(positionLeft/(originalWidth*-1));
		    	if(newNumber==1){
			    	pageNumber=0;
		    	}else{
		    	pageNumber = newNumber;
		    	console.log(newNumber);
		    	
		    	}
		    	});
		    	
		    	}
	    	});
		    
		   
	    }

        
       

	    
$(window).resize(function resizeFrame(){
var headerWidth = $('header').width();
var winHeight = $(window).height();
var winWidth = $(window).width();
var holderPos = $('.galleryImageHolder').position();
var holderLeft = holderPos.left;
      $('.comImage').css('width', (winWidth - headerWidth)+'px');
	  $('.comImage').css('height', winHeight+'px');
	  $('.fullGallery').css('width', winWidth - headerWidth+'px');
	  $('.fullGallery').css('height', winHeight+'px');
	  $('.galleryImageHolder').css('height', winHeight);
	  $('.comImage img').each(function(){
	    if (($('.comImage').width()/$('.comImage').height()) < ($(this).width()/$(this).height())) {
          $(this).css({'height':'100%','width':'auto'});
        } else {
          $(this).css({'width':'100%','height':'auto'});
        }
        });

	  var comWidth = $('.comImage').width()+1;
      		var changeMove = (difference - (originalWidth - comWidth))*pageNumber;
	      		difference = (originalWidth-comWidth);
	      		$('.galleryImageHolder').css('width', (holderCount*comWidth)+'px');
	      		$('.galleryImageHolder').css('left',holderLeft-changeMove+'px');
	      		
	      			
    /*--  	$('.comImage img').each(function(){
	      	$('.comImage').css('width', winWidth - headerWidth);
	      	$('.comImage').css('height', winHeight);
	    if (($('.comImage').width()/$('.comImage').height()) < ($(this).width()/$(this).height())) {
          $(this).css({'height':'100%','width':'auto'});
        } else {
          $(this).css({'width':'100%','height':'auto'});
        }
        });
               		--*/

});



        
function moveByImage(){
var position = $('.galleryImageHolder').position();
var posLeft = position.left;
var width = $('.comImage').width();
var galleryEnd = (posLeft*-1) + width;
var holderCount = $('.comImage').length;
$('.galleryImageHolder').css('width', (holderCount*width));
var resizeWidth = $('.galleryImageHolder').width();
//console.log(resizeWidth);
//console.log(galleryEnd);
if(galleryEnd < resizeWidth){
$('.buttonCoverRight').css("z-index", "995");
	$('.galleryImageHolder').animate({left: '-='+width+'px'}, function selected(){
		var piCounter = 1;
var sumOfImages = 0;
$('.buttonCoverRight').css("z-index", "980");
	   	$('.pageImages').each(function(){
	   	    var previousWidth = sumOfImages;
	   		var pageImagesDiv = $('.galleryInfo',this);
	    	var pageImagesCount = pageImagesDiv.length;
	    	//var pageImagesCount = (pageImagesCounter+ 'img').length;
	    	piCounter++;
	    	var originalWidth = $('.comImage').width();
	    	var menuCount = originalWidth*pageImagesCount;
	    	var holderPos = $('.galleryImageHolder').position();
			var holderLeft = holderPos.left;
	    	sumOfImages = sumOfImages + menuCount;
	    	console.log(holderLeft*-1)
	    	if(((holderLeft*-1) >= previousWidth) && ((holderLeft*-1) <= sumOfImages)){
		    	$('.galleryMenuItem').removeClass('selected');
	    		$('.galleryMenuItem'+'.'+(piCounter-1)).addClass("selected");
	    	}
        });
	});
	var position = $('.galleryImageHolder').position();
var posLeft = position.left;
console.log(posLeft);
pageNumber++;
}else{
var number = holderCount-1;
	pageNumber = number;
	
	//console.log(pageNumber);
	
}
}
function moveBackByImage(){
var position = $('.galleryImageHolder').position();
var posLeft = position.left;
var galleryWidth = $('.galleryImageHolder').width();
var width = $('.comImage').width();
var galleryEnd = (posLeft*-1) + width;
	if(posLeft<0){
	$('.buttonCoverLeft').css("z-index", "995");
	$('.galleryImageHolder').animate({left: '+='+width+'px'}, function selected(){
		var piCounter = 1;
var sumOfImages = 0;
$('.buttonCoverLeft').css("z-index", "980");
	   	$('.pageImages').each(function(){
	   	    var previousWidth = sumOfImages;
	   		var pageImagesDiv = $('.galleryInfo',this);
	    	var pageImagesCount = pageImagesDiv.length;
	    	//var pageImagesCount = (pageImagesCounter+ 'img').length;
	    	piCounter++;
	    	var originalWidth = $('.comImage').width();
	    	var menuCount = originalWidth*pageImagesCount;
	    	var holderPos = $('.galleryImageHolder').position();
			var holderLeft = holderPos.left;
	    	sumOfImages = sumOfImages + menuCount;
	    	console.log(holderLeft*-1)
	    	if(((holderLeft*-1) >= previousWidth) && ((holderLeft*-1) <= sumOfImages)){
		    	$('.galleryMenuItem').removeClass('selected');
	    		$('.galleryMenuItem'+'.'+(piCounter-1)).addClass("selected");
	    	}
	    	});
	});
	pageNumber--;
	}else{
		pageNumber=0;
	}
	//console.log(pageNumber);
}
