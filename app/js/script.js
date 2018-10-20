//  ------ for IE -----

var isIE = false || !!document.documentMode;

if (isIE) {
    var head  = document.getElementsByTagName("head")[0];
    var link  = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = "css/ie.css";
    head.appendChild(link);
    // alert('it is IE');
}

//  ------ end for IE -----


var imageArray = document.querySelectorAll('.gallery_block')
    ,galleryBox = document.querySelector('.gallery_box')
    ,galleryBoxWidth = galleryBox.offsetWidth
    ,prop = (1980/1080)
    ,mainMenu = document.querySelector('.menu')
    ,mainMenuFooter = mainMenu.querySelector('.menu_footer')
    ,mainMenuNav = mainMenu.querySelector('.menu_nav')
    ;


function heightImage(){
  for (var i = 0; i < imageArray.length; i++) {
    var heightNew = imageArray[i].offsetWidth / prop;
    imageArray[i].style.height = Math.round(heightNew) + "px";
    // console.log(Math.round(heightNew));
  }
}


heightImage(); // for image size 1980*1080


window.addEventListener('resize', function() {
  heightMenuList();
  if (galleryBox.offsetWidth !== galleryBoxWidth) {
    heightImage();
  }
}, true);


var heightMenuList = function() {

  if (document.documentElement.clientWidth < 1025) {
    // console.log(document.documentElement.clientWidth);
    var heightMenu = mainMenu.offsetHeight
       ,heightMenuFooter = mainMenuFooter.offsetHeight;

   mainMenuNav.style.height = (heightMenu - heightMenuFooter) + 'px';
  }

}

// open header menu

var openMenu = function(el) {
  el.classList.toggle('open');

  if (el.classList.contains('open')) {
    document.querySelector('.menu').classList.add('open');
    heightMenuList ();

  } else {
    document.querySelector('.menu').classList.remove('open');
  }
}
