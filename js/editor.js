$(document).bind("contextmenu", function(event) {
    event.preventDefault();
    $("ul.contextMenu")
        .show()
        .css({top: event.pageY + 15, left: event.pageX + 10});
});
$(document).click(function() {
  isHovered = $("ul.contextMenu").is(":hover");
  if (isHovered == false){
    $("ul.contextMenu").fadeOut("fast");
  }
});


// Opera
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isIE==true) {
  		 $( "body" ).prepend( '<div id="alert" style="position: absolute; top: 0; left: 0; width: 100%; z-index: 10000000; background-color: #FFF; text-align: center; color: #000; border-radius: 30px; width: 400px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="margin-top:-80px;"><img src="img/explorer.png" width="160"></div><div style="font-size: 30px; color:#D20003; font-weight: 800;margin-top: 30px;">WARNING</div><div style="color: #979797; font-size: 14px; line-height: 24px; margin: 30px;">This tool is not compatible with <u>Internet Explorer</u>.<br>Please use an other browser (Chrome, Firefox, Edge).</div><div class="go"><a href="https://www.google.com/search?q=google+chrome" style="text-decoration: none; color: #FFF;">CLOSE</a></div></div><div id="fond" style="position: absolute; top: 0; left: 0; width: 100%; z-index: 100000; background-color: #000; opacity: 0.7; height:100%; color:#FFF; "></div>');
    }
	else if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
	  $( "body" ).prepend( '<div id="welcome" style="position: absolute; top: 0; left: 0; z-index: 10000000; background-color: #FFF; text-align: center; color: #000; border-radius: 30px; width: 80%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="margin-top:-150px;"><img src="img/smartphone.png" width="300"></div><div style="font-size: 4em; color:#D20003; font-weight: 800;margin-top: 30px;">WARNING</div><div style="color: #979797; font-size: 2.3em; line-height: 32px; margin: 30px;">Photo comparator is not optimize for mobile.<br>Please use a computer.<br><br>Thank\'s<br></div><div style="background-color: #1895DB; font-weight: 600; text-align: center; margin: 0; height: 60px; color: #FFF; font-size: 3em; line-height: 60px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;padding:20px;"><a href="#" id="close-button" style="text-decoration: none; color: #FFF;">CLOSE</a></div></div><div id="fond" style="position: absolute; top: 0; left: 0; width: 100%; z-index: 100000; background-color: #000; opacity: 0.7; height:100%; color:#FFF; "></div>');
	}
  	else {
  		$( "body" ).prepend( '<div id="welcome" style="position: absolute; top: 0; left: 0; width: 100%; z-index: 10000000; background-color: #FFF; text-align: center; color: #000; border-radius: 30px; width: 400px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"><div style="margin-top:-80px;"><img src="img/photos.png" width="160"></div><div style="font-size: 30px; color:#1895DB; font-weight: 800;margin-top: 30px;">WELCOME</div><div style="color: #979797; font-size: 14px; line-height: 24px; margin: 30px;">Photo comparator is a tool for view difference between 2 pictures.<br>For more informations view help center</div><div style="background-color: #1895DB; font-weight: 600; text-align: center; margin: 0; height: 60px; color: #FFF; font-size: 20px; line-height: 60px; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px;"><a href="#" id="close-button" style="text-decoration: none; color: #FFF;">GO!</a></div></div><div id="fond" style="position: absolute; top: 0; left: 0; width: 100%; z-index: 100000; background-color: #000; opacity: 0.7; height:100%; color:#FFF; "></div>');
    }
$(document).ready(function () {

            if (Boolean(readCookie('hide'))) {
                $('#welcome').hide();
                $('#welcome').fadeOut(1000);
                $('#fond').hide();
                $('#fond').fadeOut(1000);
            }
            $('#close-button').click(function (e) {

                $('#welcome').fadeOut(700);
				$('#fond').fadeOut(700);
                e.stopPropagation();

                createCookie('hide', true, 1);
                return false;
            });

            function createCookie(name, value, days) {
                if (days == 1) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    var expires = "; expires=" + date.toGMTString();
                }
                else var expires2 = "";
                document.cookie = name + "=" + value + "; expires=" + expires + "; path=/lrp/image-editor/";

              //  $.cookie(name, value, { expires: days });
            }

            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

            function eraseCookie(name) {
                createCookie(name, "", -1);
            }

        });
        

var i = 0;
var dragging = false;
   $('#dragbar').mousedown(function(e){
       e.preventDefault();

       dragging = true;
       var main = $('#container');
       var ghostbar = $('<div>',
                        {id:'ghostbar',
                         css: {
                                height: main.outerHeight(),
                                top: main.offset().top,
                                left: main.offset().left
                               }
                        }).appendTo('body');

        $(document).mousemove(function(e){
          ghostbar.css("left",e.pageX+2);
       });

    });

   $(document).mouseup(function(e){
       if (dragging)
       {
           var percentage = (e.pageX / window.innerWidth) * 100;
           var mainPercentage = 100-percentage;

           $('#menu').css("width",percentage + "%");
           $('#container').css("width",mainPercentage + "%");
		   $('#dragbar').css("left",percentage + "%");
           $('#ghostbar').remove();
           $(document).unbind('mousemove');
           dragging = false;
       }
    });


$("#custom-close").modal({
	closeClass: 'icon-remove',
	closeText: '<i class="fa fa-times" aria-hidden="true"></i>'
});

function init() {
	document.getElementById("myrange").disabled = true;
	document.getElementById("myrange3").disabled = true;
	document.getElementById("myrange2").disabled = true;
	document.getElementById("myrange4").disabled = true;
	document.getElementById("myrange5").disabled = true;
	document.getElementById("myrange6").disabled = true;
	document.getElementById("myrange7").disabled = true;
	document.getElementById("myrange8").disabled = true;
	document.getElementById("myrange9").disabled = true;
	document.getElementById("myrange10").disabled = true;
	document.getElementById("myrange22").disabled = true;
	document.getElementById("myrange21").disabled = true;
	document.getElementById("slideOne").disabled = true;
	document.getElementById("slideTwo").disabled = true;
}
function close_welcome() {
	$( "#welcome" ).remove();
	$( "#fond" ).remove();
}
function active_range1() {
	document.getElementById("myrange").disabled = false;
	document.getElementById("myrange3").disabled = false;
	document.getElementById("myrange5").disabled = false;
	document.getElementById("myrange7").disabled = false;
	document.getElementById("myrange9").disabled = false;
	document.getElementById("myrange21").disabled = false;
	document.getElementById("slideOne").disabled = false;
}
function active_range2() {
	document.getElementById("myrange2").disabled = false;
	document.getElementById("myrange4").disabled = false;
	document.getElementById("myrange6").disabled = false;
	document.getElementById("myrange8").disabled = false;
	document.getElementById("myrange10").disabled = false;
	document.getElementById("myrange22").disabled = false;
	document.getElementById("slideTwo").disabled = false;
}

function displayleft() {
	document.getElementById("reglage1").style.display = 'block';
	document.getElementById("reglage2").style.display = 'none';
	$( "#underline1" ).addClass( "trait" );
	$( "#underline2" ).removeClass( "trait" );
	document.getElementById("bold1").style = 'font-weight: bold';
	document.getElementById("bold2").style = 'font-weight: normal';
	$('#holder').css('box-shadow', '0 0 20px var(--main-element-color)');
	$('#holder2').css('box-shadow', 'none');

}

function displayright() {
	document.getElementById("reglage1").style.display = 'none';
	document.getElementById("reglage2").style.display = 'block';
	$( "#underline2" ).addClass( "trait" );
	$( "#underline1" ).removeClass( "trait" );
	document.getElementById("bold2").style = 'font-weight: bold';
	document.getElementById("bold1").style = 'font-weight: normal';
	$('#holder2').css('box-shadow', '0 0 20px var(--main-element-color)');
	$('#holder').css('box-shadow', 'none');

}


function transparence_img1() {
	var a = document.getElementById("myrange").value;
	var b = a / 100;
	//alert (b);
	$('#img').css('opacity', b);
}

function transparence_img2() {
	var a = document.getElementById("myrange2").value;
	var b = a / 100;
	//alert (b);
	$('#img_2').css('opacity', b);
}

function luminosite_img1() {
	var contrast = $('#img').css("filter");
	var a = document.getElementById("myrange3").value;
	var b = a / 100;
	var filterlum = 'brightness(' + b + ')';
	if (contrast != "none") {
		var c = (document.getElementById("myrange5").value) / 100;
		var filtercont = 'contrast(' + c + ')';
		var d = document.getElementById("myrange21").value;
		var filtercoul = 'saturate(' + d + '%)';
		$('#img').css('filter', filterlum + filtercont + filtercoul);
	} else {
		$('#img').css('filter', filterlum);
	}
}

function contrast_img1() {
	var lumiere = $('#img').css("filter");
	var a = document.getElementById("myrange5").value;
	var b = a / 100;
	var filtercont = 'contrast(' + b + ')';
	//alert (filterlum);
	if (lumiere != "none") {
		var c = (document.getElementById("myrange3").value) / 100;
		var filterlum = 'brightness(' + c + ')';
		var d = document.getElementById("myrange21").value;
		var filtercoul = 'saturate(' + d + '%)';
		$('#img').css('filter', filtercont + filterlum + filtercoul);
	} else {
		$('#img').css('filter', filtercont);
	}
}

function couleur_img1() {
	var valeur = $('#img').css("filter");
	var a = document.getElementById("myrange21").value;
	var filtercoul = 'saturate(' + a + '%)';
	if (valeur != "none") {
		var g = (document.getElementById("myrange5").value) / 100;
		var filtercont = 'contrast(' + g + ')';
		var h = (document.getElementById("myrange3").value) / 100;
		var filterlum = 'brightness(' + h + ')';
		$('#img').css('filter', filtercoul + filterlum + filtercont);
	} else {
		$('#img').css('filter', filtercoul);
	}
}

function zoom_img1() {
	var a = document.getElementById("myrange7").value;
	var size = a + '%';
	$('#img').animate({
		width: size
	}, 500);
}

function zoom_img2() {
	var a = document.getElementById("myrange8").value;
	var size = a + '%';
	$('#img_2').animate({
		width: size
	}, 500);
}

function luminosite_img2() {
	var valeur = $('#img_2').css("filter");
	var a = document.getElementById("myrange4").value;
	var b = a / 100;
	var filterlum = 'brightness(' + b + ')';
	if (valeur != "none") {
		var c = (document.getElementById("myrange6").value) / 100;
		var filtercont = 'contrast(' + c + ')';
		var d = (document.getElementById("myrange22").value);
		var filtercoul = 'saturate(' + d + '%)';
		$('#img_2').css('filter', filtercont + filterlum + filtercoul);
	} else {
		$('#img_2').css('filter', filterlum);
	}
}

function contrast_img2() {
	var valeur = $('#img_2').css("filter");
	var a = document.getElementById("myrange6").value;
	var b = a / 100;
	var filtercont = 'contrast(' + b + ')';
	//alert (filtercont);
	if (valeur != "none") {
		var e = (document.getElementById("myrange4").value) / 100;
		var filterlum = 'brightness(' + e + ')';
		var f = (document.getElementById("myrange22").value);
		var filtercoul = 'saturate(' + f + '%)';
		$('#img_2').css('filter', filtercont + filterlum + filtercoul);
	} else {
		$('#img_2').css('filter', filtercont);
	}
}

function couleur_img2() {
	var valeur = $('#img_2').css("filter");
	var a = document.getElementById("myrange22").value;
	var filtercoul = 'saturate(' + a + '%)';
	if (valeur != "none") {
		var g = (document.getElementById("myrange6").value) / 100;
		var filtercont = 'contrast(' + g + ')';
		var h = (document.getElementById("myrange4").value) / 100;
		var filterlum = 'brightness(' + h + ')';
		$('#img_2').css('filter', filtercoul + filterlum + filtercont);
	} else {
		$('#img_2').css('filter', filtercoul);
	}
}
function rotate_img1() {
	var a = document.getElementById("myrange9").value;
	var check = document.getElementById("slideOne").checked;
	if (check == true) {
		$("#img").css('transform', 'scaleX(-1) rotate(' + a + 'deg)');
	} else {
		$("#img").css('transform', 'scaleX(1) rotate(' + a + 'deg)');
	}
}

function rotate_img2() {
	var a = document.getElementById("myrange10").value;
	var check = document.getElementById("slideTwo").checked;
	if (check == true) {
		$("#img_2").css('transform', 'scaleX(-1) rotate(' + a + 'deg)');
	} else {
		$("#img_2").css('transform', 'scaleX(1) rotate(' + a + 'deg)');
	}
}


$("#slideOne").click(function () {
	var a = document.getElementById("myrange9").value;
	var check = document.getElementById("slideOne").checked;
	if (check == true) {
		$("#img").css('transform', 'scaleX(-1) rotate(' + a + 'deg)');
	} else {
		$("#img").css('transform', 'scaleX(1) rotate(' + a + 'deg)');
	}
});


$("#slideTwo").click(function () {
	var a = document.getElementById("myrange10").value;
	var check = document.getElementById("slideTwo").checked;
	if (check == true) {
		$("#img_2").css('transform', 'scaleX(-1) rotate(' + a + 'deg)');
	} else {
		$("#img_2").css('transform', 'scaleX(1) rotate(' + a + 'deg)');
	}
});

function invert() {
	if ($("a").is("#first")) {
		$(".container-img1").css('z-index', '10');
		$(".container-img2").css('z-index', '100');
		$("#first").attr("id", "second");
	} else if ($("a").is("#second")) {
		$(".container-img1").css('z-index', '100');
		$(".container-img2").css('z-index', '10');
		$("#second").attr("id", "first");
	}
}

function view() {
	if ($('input.onoffswitch-checkbox').is(':checked')) {
		$('.container-img1').animate({
			marginLeft: '25%',
			top: '35px'
		}, 500);
		$('.container-img2').animate({
			marginLeft: '25%',
			top: '35px',
		}, 500);
		$("#order").css('display', 'block');
	} else {
		$('.container-img1').animate({
			marginLeft: '3%',
			top: '35px',
			opacity: '1'
		}, 500);
		$('.container-img2').animate({
			marginLeft: '52%',
			top: '35px',
			opacity: '1'
		}, 500);
		$("#order").css('display', 'none');
	}
}

$('#select3').click(function () {
	$('#basics2').slideToggle();
	$('#select3').toggleClass('select');
	$('#select3').toggleClass('toggle');
	$('#fa3').toggleClass('fa fa-angle-down');
	$('#fa3').toggleClass('fa fa-angle-up');
});
$('#select4').click(function () {
	$('#rotate2').slideToggle();
	$('#select4').toggleClass('select');
	$('#select4').toggleClass('toggle');
	$('#fa4').toggleClass('fa fa-angle-down');
	$('#fa4').toggleClass('fa fa-angle-up');
});

$('#select1').click(function () {
	$('#rotate').slideToggle();
	$('#select1').toggleClass('select');
	$('#select1').toggleClass('toggle');
	$('#fa1').toggleClass('fa fa-angle-down');
	$('#fa1').toggleClass('fa fa-angle-up');
});

$('#select2').click(function () {
	$('#basics').slideToggle();
	$('#select2').toggleClass('select');
	$('#select2').toggleClass('toggle');
	$('#fa2').toggleClass('fa fa-angle-down');
	$('#fa2').toggleClass('fa fa-angle-up');
});


$("#droite").click(function () {
	$("#img").animate({
		marginLeft: '+=2px'
	}, 500);
});
$("#gauche").click(function () {
	$("#img").animate({
		marginLeft: '-=2px'
	}, 500);
});
$("#haut").click(function () {
	$("#img").animate({
		marginTop: '-=2px'
	}, 500);
});
$("#bas").click(function () {
	$("#img").animate({
		marginTop: '+=2px'
	}, 500);
});


var rotation = 0;

jQuery.fn.rotate = function (degrees) {
	$("#img").css({
		'transform': 'rotate(' + degrees + 'deg)'
	});
	return $("#img");
};

$('#turn-left').click(function () {
	rotation -= 5;
	$("#img").rotate(rotation);
});
$('#turn-right').click(function () {
	rotation += 5;
	$("#img").rotate(rotation);
});
jQuery.fn.rotate2 = function (degrees2) {
	$("#img_2").css({
		'transform': 'rotate(' + degrees2 + 'deg)'
	});
	return $("#img_2");
};

$('#turn-left2').click(function () {
	rotation -= 5;
	$("#img_2").rotate2(rotation);
});
$('#turn-right2').click(function () {
	rotation += 5;
	$("#img_2").rotate2(rotation);
});

/*$("#zoom-in").click(function()
  {$("#img").animate({width: '+=1%', height:'+=1%'}, 500);});
$("#zoom-out").click(function()
  {$("#img").animate({width: '-=1%', height:'-=1%'}, 500);});*/

$("#droite-2").click(function () {
	$("#img_2").animate({
		marginLeft: '+=2px'
	}, 500);
});
$("#gauche-2").click(function () {
	$("#img_2").animate({
		marginLeft: '-=2px'
	}, 500);
});
$("#haut-2").click(function () {
	$("#img_2").animate({
		marginTop: '-=2px'
	}, 500);
});
$("#bas-2").click(function () {
	$("#img_2").animate({
		marginTop: '+=2px'
	}, 500);
});
/*$("#zoom-in-2").click(function()
  {$("#img_2").animate({width: '+=1%', height:'+=1%'}, 500);});
$("#zoom-out-2").click(function()
  {$("#img_2").animate({width: '-=1%', height:'-=1%'}, 500);});*/


var originalImage = null;
var grayImage = null;
var redImage = null;
var redImageOnly = null;
var uploadImage = null;
var canvas = document.getElementById("img");
var originalImage_2 = null;
var grayImage_2 = null;
var redImage_2 = null;
var redImageOnly_2 = null;
var uploadImage_2 = null;
var canvas_2 = document.getElementById("img_2");

function loadImage(){
	uploadImage = document.getElementById("file");
  	originalImage = new SimpleImage(uploadImage);
  	originalImage.drawTo(canvas);
	$( "#upload" ).remove();
	$('#drag1').css('border', 'none');
	$('#drag1').css('background-color', 'transparent');
	$("#drag1").draggable();
	active_range1();
}
$('#holder').on({
	'dragover dragenter': function (e) {
		e.preventDefault();
		e.stopPropagation();
	},
	'drop': function (e) {
		//console.log(e.originalEvent instanceof DragEvent);
		var dataTransfer = e.originalEvent.dataTransfer;
		if (dataTransfer && dataTransfer.files.length) {
			e.preventDefault();
			e.stopPropagation();
			$.each(dataTransfer.files, function (i, file) {
				var reader = new FileReader();
				reader.onload = $.proxy(function (file, $fileList, event) {
					uploadImage = event.target.result;
					originalImage = new SimpleImage(uploadImage);
					originalImage.drawTo(canvas);
					$( "#upload" ).remove();
					$('#drag1').css('border', 'none');
					$('#drag1').css('background-color', 'transparent');
					$("#drag1").draggable();
					active_range1();
				}, this, file, $("#holder"));
				reader.readAsDataURL(file);
			});
		}
	}
});

function loadImage_2(){
	uploadImage_2 = document.getElementById("file_2");
  	originalImage_2 = new SimpleImage(uploadImage_2);
  	originalImage_2.drawTo(canvas_2);
	$( "#upload_2" ).remove();
	$('#drag2').css('border', 'none');
	$('#drag2').css('background-color', 'transparent');
	$("#drag2").draggable();
	active_range2();
}
$('#holder2').on({
	'dragover dragenter': function (e) {
		e.preventDefault();
		e.stopPropagation();
	},
	'drop': function (e) {
		//console.log(e.originalEvent instanceof DragEvent);
		var dataTransfer = e.originalEvent.dataTransfer;
		if (dataTransfer && dataTransfer.files.length) {
			e.preventDefault();
			e.stopPropagation();
			$.each(dataTransfer.files, function (i, file) {
				var reader = new FileReader();
				reader.onload = $.proxy(function (file, $fileList, event) {
					uploadImage_2 = event.target.result;
					originalImage_2 = new SimpleImage(uploadImage_2);
					originalImage_2.drawTo(canvas_2);
					$( "#upload_2" ).remove();
					$('#drag2').css('border', 'none');
					$('#drag2').css('background-color', 'transparent');
					$("#drag2").draggable();
					active_range2();
				}, this, file, $("#holder2"));
				reader.readAsDataURL(file);
			});
		}
	}
});
function doGray(){
  grayImage = new SimpleImage(originalImage);
  //console.log(grayImage==null);

  if(imageIsLoaded(grayImage)){
    makeGray();
    grayImage.drawTo(canvas);
  }
}

function makeGray() {
  for(var pixel of grayImage.values()){
    var pixRed = pixel.getRed();
    var pixGreen = pixel.getGreen();
    var pixBlue = pixel.getBlue();
    var newAverageValue = (pixRed+pixGreen+pixBlue)/3;
    pixel.setRed(newAverageValue);
    pixel.setGreen(newAverageValue);
    pixel.setBlue(newAverageValue);
  }
}

function doRed(){
  redImage = new SimpleImage(originalImage);
  if(imageIsLoaded(redImage)){
      makeRed();
      redImage.drawTo(canvas);
     }
}

function makeRed(){
  for(var pixel of redImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
}
function doGreen(){
  greenImage = new SimpleImage(originalImage);
  if(imageIsLoaded(greenImage)){
      makeGreen();
      greenImage.drawTo(canvas);
     }
}

function makeGreen(){
  for(var pixel of greenImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
      pixel.setRed(0);
    }else{
      pixel.setGreen(255);
      pixel.setRed(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
}
function doBlue(){
  blueImage = new SimpleImage(originalImage);
  if(imageIsLoaded(blueImage)){
      makeBlue();
      blueImage.drawTo(canvas);
     }
}
function makeBlue(){
  for(var pixel of blueImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
      pixel.setRed(0);
    }else{
      pixel.setBlue(255);
      pixel.setGreen(2*avg-255);
      pixel.setRed(2*avg-255);
    }
  }
}

function doRedOnly(){
  redImageOnly = new SimpleImage(originalImage);
  if(imageIsLoaded(redImageOnly)){
    makeRedOnly();
    redImageOnly.drawTo(canvas);
  }
}

function makeRedOnly() {

  for(var pixel of redImageOnly.values()){
    var pixRed = pixel.getRed();
    var pixGreen = pixel.getGreen();
    var pixBlue = pixel.getBlue();
    var newAverageValue = (pixRed+pixGreen+pixBlue)/3;
    //pixel.setRed(newAverageValue);
    if (pixRed > 50 && pixGreen < 73 && pixBlue <140){
      pixel.setRed(pixRed);
      pixel.setGreen(newAverageValue);
      pixel.setBlue(newAverageValue);
    }else{
      pixel.setRed(newAverageValue);
      pixel.setGreen(newAverageValue);
      pixel.setBlue(newAverageValue);
    }
  }
}

function makeReset(){
  //redImage = new SimpleImage();
  redImageOnly = new SimpleImage(originalImage);
  redImage = new SimpleImage(originalImage);
  grayImage = new SimpleImage(originalImage);
  originalImage.drawTo(canvas);
}

function imageIsLoaded(img){
  if(img == null){
       alert("Image not loaded");
       return false;
     }else if(!img.complete()){
       alert("process not completed");
       return false;
     }else{
       return true;
     }
}
function doGray_2(){
  grayImage = new SimpleImage(originalImage_2);
  //console.log(grayImage==null);

  if(imageIsLoaded(grayImage)){
    makeGray_2();
    grayImage.drawTo(canvas_2);
  }
}

function makeGray_2() {
  for(var pixel of grayImage.values()){
    var pixRed = pixel.getRed();
    var pixGreen = pixel.getGreen();
    var pixBlue = pixel.getBlue();
    var newAverageValue = (pixRed+pixGreen+pixBlue)/3;
    pixel.setRed(newAverageValue);
    pixel.setGreen(newAverageValue);
    pixel.setBlue(newAverageValue);
  }
}

function doRed_2(){
  redImage = new SimpleImage(originalImage_2);
  if(imageIsLoaded(redImage)){
      makeRed_2();
      redImage.drawTo(canvas_2);
     }
}
function makeRed_2(){
  for(var pixel of redImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
}

function doBlue_2(){
  blueImage = new SimpleImage(originalImage_2);
  if(imageIsLoaded(blueImage)){
      makeBlue_2();
      blueImage.drawTo(canvas_2);
     }
}
function makeBlue_2(){
  for(var pixel of blueImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setBlue(2*avg);
      pixel.setGreen(0);
      pixel.setRed(0);
    }else{
      pixel.setBlue(255);
      pixel.setGreen(2*avg-255);
      pixel.setRed(2*avg-255);
    }
  }
}

function doGreen_2(){
  greenImage = new SimpleImage(originalImage_2);
  if(imageIsLoaded(greenImage)){
      makeGreen_2();
      greenImage.drawTo(canvas_2);
     }
}

function makeGreen_2(){
  for(var pixel of greenImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128){
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
      pixel.setRed(0);
    }else{
      pixel.setGreen(255);
      pixel.setRed(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
}

function makeReset_2(){
  //redImage = new SimpleImage();
  redImageOnly = new SimpleImage(originalImage_2);
  redImage = new SimpleImage(originalImage_2);
  grayImage = new SimpleImage(originalImage_2);
  originalImage_2.drawTo(canvas_2);
}

function imageIsLoaded_2(img_2){
  if(img_2 == null){
       alert("Image not loaded");
       return false;
     }else if(!img_2.complete()){
       alert("process not completed");
       return false;
     }else{
       return true;
     }
}
var c=document.getElementById("img");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();

function download_image(){
  var canvas = document.getElementById("img");
  image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  var link = document.createElement('a');
  link.download = "my-image.png";
  link.href = image;
  link.click();
}
function resetsetting() {
	document.getElementById("slideOne").checked = false;
	document.getElementById("slideTwo").checked = false;
	document.getElementById("myrange").value = 100;
	document.getElementById("resultat").innerHTML = 100;
	document.getElementById("myrange2").value = 100;
	document.getElementById("resultat2").innerHTML = 100;
	document.getElementById("myrange3").value = 100;
	document.getElementById("resultat3").innerHTML = 100;
	document.getElementById("myrange4").value = 100;
	document.getElementById("resultat4").innerHTML = 100;
	document.getElementById("myrange5").value = 100;
	document.getElementById("resultat5").innerHTML = 100;
	document.getElementById("myrange6").value = 100;
	document.getElementById("resultat6").innerHTML = 100;
	document.getElementById("myrange7").value = 100;
	document.getElementById("resultat7").innerHTML = 100;
	document.getElementById("myrange8").value = 100;
	document.getElementById("resultat8").innerHTML = 100;
	document.getElementById("myrange9").value = 0;
	document.getElementById("resultat9").innerHTML = 0;
	document.getElementById("myrange10").value = 0;
	document.getElementById("resultat10").innerHTML = 0;
	document.getElementById("myrange21").value = 0;
	document.getElementById("resultat21").innerHTML = 0;
	document.getElementById("myrange22").value = 0;
	document.getElementById("resultat22").innerHTML = 0;
	document.getElementById("drag1").style = 'border: none; background-color: transparent; position: relative;'
	document.getElementById("drag2").style = 'border: none; background-color: transparent; position: relative;'
	document.getElementById("img").style = '';
	document.getElementById("img_2").style = '';
	makeReset();
	makeReset_2();
}
