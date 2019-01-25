
$(document).ready(function() { 


    var toggleButton = document.getElementById("toggle_mobile_nav");
    var mainList = document.getElementById("main_list");
    var navLinks = document.querySelectorAll("nav .content > ul >li");
    var dropDownUl = document.querySelectorAll("nav .content > ul >li >ul");
    
    
    // HIDE NAV MENU IN SMALL SCREEN BY DEFAULT
    function automaticallyHideNavMenuInSmallScreen(){
        if(window.matchMedia("(max-width: 604px)").matches){
            mainList.classList.add("hide_in_small_screens")
        }else{
            mainList.classList.remove("hide_in_small_screens")
        }

    }
    
    // TOGGLE MOBILE NAV BAR
    function toggleMobileNav(){
        toggle_mobile_nav.onclick = function(){
            this.classList.toggle("fa-bars");
            this.classList.toggle("fa-arrow-left");
            mainList.classList.toggle("nav_hide");
            mainList.classList.toggle("hide_in_small_screens");
            document.body.classList.toggle('hide_overflow')
        }   
    }
    

function adjustNavInLargScreens(){
    if(window.matchMedia("(min-width: 605px)").matches){
        navLinks.forEach(function(navLink){
            navLink.onmouseover = function(){
                this.style.background  = "none";
                navLink.children[0].style.background  = "#FC4444";
            }
            navLink.onmouseout = function(){
                navLink.children[0].style.background  = "none";
            }
            if (navLink.lastElementChild.tagName == "UL"){
                navLink.onmouseover = function(){
                    this.children[1].style.visibility = "visible";
                    this.children[1].style.opacity = "1";
                    this.children[1].style.top = "55px";
                }
            }
            if (navLink.lastElementChild.tagName == "UL"){
                navLink.onmouseout = function(){
                    this.children[1].style.visibility = "hidden";
                    this.children[1].style.opacity = "0";
                    this.children[1].style.top = "65px";
                }
            }
        })
    }
}

function adjustNavInSmallScreens(){
    if(window.matchMedia("(max-width: 604px)").matches){
        navLinks.forEach(function(navLink){
            navLink.onclick = function(){
                this.children[0].style.background  = "#FC4444";
                if(this.contains(this.children[1])){
                    this.children[1].classList.toggle("smaller_size");
                }
                var siblings = $(this).siblings();
                for (let i = 0; i < siblings.length; i++){
                    siblings[i].firstElementChild.style.background  = "none";
                    if (siblings[i].contains(siblings[i].children[1])){
                        siblings[i].lastElementChild.classList.remove("smaller_size");
                    }    
                }
                
            }

        })
    }
}

    function navBar(){ 
        
        function triggerNav(){
            if(window.matchMedia("(min-width: 605px)").matches){
                adjustNavInLargScreens();
    
            } else {
                adjustNavInSmallScreens()
                
            }
        }
        triggerNav()
    }
    
    window.onresize = function(){
        automaticallyHideNavMenuInSmallScreen();
        toggleMobileNav();
        navBar();
    };
    automaticallyHideNavMenuInSmallScreen();
    toggleMobileNav();
    navBar()
    // window.onresize =  navBar();
    
    
 
    //CHANGING HEADER BACKGROUND WHNE CLICK ON HEADER BUTTON
    var backgroundToggleLinks = document.querySelectorAll("#background_toggle ul li a");
    var backgroundToggleLinksArray = Array.from(backgroundToggleLinks);
    var backgroundImagesSrc = ["images/header_1.jpeg","images/header_2.jpeg","images/header_3.jpeg"];
    var header = document.getElementById("header");
    
    for(var i = 0; i < backgroundToggleLinksArray.length; i++ ){
            backgroundToggleLinksArray[i].addEventListener("click",function(){
                for(let i = 0; i < backgroundToggleLinksArray.length; i++){
                    backgroundToggleLinksArray[i].style.background = "transparent";  
                }
                this.style.background = "#fff";    
            header.style.backgroundImage = "url(" + backgroundImagesSrc[backgroundToggleLinksArray.indexOf(this)]+ ")";
        })
    }
    
    
    
    
    // cHANGE NAV BAR LAYOUT ON WINDOW SCROLL
    var nav = document.querySelector("nav");
    
    changeNavbarStyle();
    window.onscroll = function() {changeNavbarStyle()};
    
    function changeNavbarStyle(){
        if(window.matchMedia("(min-width: 605px)").matches){
            if(window.scrollY > 100){
                nav.classList.add("dark") 
            }else{
                nav.classList.remove("dark") 
            }
        }
        
    }
    
    });



// ADVANTAGES SECTION SOME STYLING

var shapes = document.querySelectorAll("#advantages div.grid_4 div");
shapes =  Array.from(shapes);



function chStylOnHover(elements){
    elements.forEach(function(element){
        element.children[0].onmouseover = function(){
            element.children[1].style.transform = "rotate(0deg)";
        }
        element.children[0].onmouseout = function(){
            element.children[1].style.transform = "rotate(45deg)";
        }
    })

}

chStylOnHover(shapes)




// ABOUT COMPANY PROGRESS BAR ANIMATION
  

// ABOUT COMPANY PROGRESS BAR ANIMATION
    var aboutCompanySection = document.getElementById('about_company');
    var progressMeter = document.querySelectorAll(".skills_bars .meter span:first-of-type");
    var progressNumber = document.querySelectorAll('.skills_bars .meter span.number');
    var aboutCompanySectionOffsetTop = aboutCompanySection.offsetTop;
    var progressNumberWidths = [50,90,80,20];
    var moveTimers = [];
    var width = 0;
    window.addEventListener("scroll", progressNumberAdd);
    window.addEventListener("touchmove", progressNumberAdd);

    function progressNumberAdd(){
        if (window.pageYOffset > (aboutCompanySectionOffsetTop - 1)){
            window.removeEventListener("scroll", progressNumberAdd);
            window.removeEventListener("touchmove", progressNumberAdd);
            
            initProgressBar();
        }
    }
    
    function initProgressBar(){
      for(var i = 0; i < progressMeter.length; i++){
        x(i);     
      }  	
    }

    function x(i){
        moveTimers[i] = setInterval(numberAddCheker, 20, i);
    }
    
    function numberAddCheker(i){
        if(width >= progressNumberWidths[i]){
            clearInterval(moveTimers[i])
        }else{
            width++;
            progressMeter[i].style.width = width + "%";
            progressNumber[i].textContent = width * 1 + "%" ;
        }
    } 



// COUNTER FUNCTION in COUNTER SECTION
window.addEventListener("scroll", counter);
var counterP = document.querySelectorAll("#counters .content div p");
var finalValues = [78,23,7,374];
function counter(){
    if(pageYOffset > (counterP[0].offsetTop - 600)){
        window.removeEventListener("scroll", counter);
        counterP.forEach(function(el,i){
            var id = setInterval(count,5);
            var start = 0;
            function count(){
                if(start >= finalValues[i]){
                    clearInterval(id);
                }else{
                    start++;
                    el.textContent =  start;
                }
            }
            
        })
    }  
}
// COUNTER FUNCTION in COUNTER SECTION



// CLIENTS PARTNER TOGGLE SLIDER

var clientsAnchor = document.querySelectorAll('#clients #clients_toggle ul li a');
var clientsLogosDiv = document.getElementsByClassName('clients_logos');

clientsAnchor[0].onclick = function(){
    clientsLogosDiv[0].classList.remove('translate_1');
    clientsLogosDiv[0].classList.remove('translate_2');
}
clientsAnchor[1].onclick = function(){
    clientsLogosDiv[0].classList.add('translate_1');
    clientsLogosDiv[0].classList.remove('translate_2');
}
clientsAnchor[2].onclick = function(){
    clientsLogosDiv[0].classList.remove('translate_1');
    clientsLogosDiv[0].classList.add('translate_2');
}

for(let i =0; i< clientsAnchor.length; i++){
    clientsAnchor[i].addEventListener('click',function(){
        for(var i = 0; i < clientsAnchor.length; i++){
            clientsAnchor[i].classList.remove('active');
            this.classList.add('active');
        }
    })
}


var clientsAutoSlider = function(){
    var clientsSlider = setInterval(zzz,3500);
    var i =0;
    function zzz(){
        if (i === 0){
            clientsLogosDiv[0].classList.remove('translate_1');
            clientsLogosDiv[0].classList.remove('translate_2');
            i++;
        }else if(i ===1){
            clientsLogosDiv[0].classList.add('translate_1');
            clientsLogosDiv[0].classList.remove('translate_2');
            i++
        }else if(i === 2){
            clientsLogosDiv[0].classList.remove('translate_1');
            clientsLogosDiv[0].classList.add('translate_2');
            i = 0;
        }
        for(let i = 0; i< clientsAnchor.length; i++){
            if(clientsLogosDiv[0].classList.contains('translate_1')){
                clientsAnchor[i].classList.remove('active');
                clientsAnchor[1].classList.add('active');
            }else if(clientsLogosDiv[0].classList.contains('translate_2')){
                clientsAnchor[i].classList.remove('active');
                clientsAnchor[2].classList.add('active');
            }else{
                clientsAnchor[i].classList.remove('active');
                clientsAnchor[0].classList.add('active'); 
            }
        }
    }
}

//clientsAutoSlider()


// TESTIMONIALS TOGGLE 
var testimonialsAnchor = document.querySelectorAll('#testimonials #testimonials_toggle ul li a');
var testiDiv = document.querySelector('#testimonials #testi');

function testiCarousal(){
    for (var i = 0; i < testimonialsAnchor.length; i++ ){
        check(i);   
    }
}
function check(i){
    if (i == 0){
        testimonialsAnchor[i].onclick = function(){
            testiDiv.className = '';  
        }
    }else{
        testimonialsAnchor[i].onclick = function(){
            testiDiv.className = '';
            testiDiv.classList.add('trans_'+i);
        } 
    }
}

testiCarousal()

for(let i =0; i< testimonialsAnchor.length; i++){
    trigger(i)
}
function trigger(i){
    testimonialsAnchor[i].addEventListener('click',function(){
        for(var n = 0; n < testimonialsAnchor.length; n++){
            testimonialsAnchor[n].className = '';
        }
        this.classList.add('active');
    })
}
    



// TO TOP BUTTON
console.log('hello')
window.addEventListener('scroll', function(){
    scrollFunction()
    
})

function scrollFunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scroll_to_top").style.bottom = "-24px";
    } else {
        document.getElementById("scroll_to_top").style.bottom = "-62px";
    }
}

function topFunction() {
   // document.body.scrollTop = 0; // For Safari
   // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   var top = 19;
   var windowTop = document.documentElement.scrollTop;
   var id = setInterval(toTopT,1)

   function toTopT(){
    if (windowTop <top){
        clearInterval(id)
        console.log(windowTop)
    }else{
        windowTop = windowTop -25 ;
        window.scrollTo(0,windowTop)
    }
  }

}
