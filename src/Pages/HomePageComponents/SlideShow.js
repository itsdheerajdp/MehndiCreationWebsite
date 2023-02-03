import React from 'react'
import pic1 from './SlideShowImages/ss_pic1.jpg'
import pic2 from './SlideShowImages/ss_pic2.jpg'
import pic3 from './SlideShowImages/ss_pic3.jpg'
import pic4 from './SlideShowImages/ss_pic4.jpg'
import pic5 from './SlideShowImages/ss_pic5.jpg'
import pic6 from './SlideShowImages/ss_pic6.jpg'
import pic7 from './SlideShowImages/ss_pic7.jpg'
import pic8 from './SlideShowImages/ss_pic8.jpg'
import pic9 from './SlideShowImages/ss_pic9.jpg'
import pic10 from './SlideShowImages/ss_pic10.jpg'

import './SlideShow.css'
import jQuery from 'jquery'
import $ from 'jquery'
export default function SlideShow() {
  
(function($) {
  
  $.fn.sliderResponsive = function(settings) {
    
    var set = $.extend( 
      {
        slidePause:5000,
        fadeSpeed: 800,
        autoPlay: "on",
        showArrows: "off", 
        hideDots: "on", 
        hoverZoom: "on",
        titleBarTop: "off"
      },
      settings
    ); 
    
    var $slider = $(this);
    var size = $slider.find("> div").length; //number of slides
    var position = 0; // current position of carousal
    var sliderIntervalID; // used to clear autoplay
      
    // Add a Dot for each slide
    $slider.append("<ul></ul>");
    $slider.find("> div").each(function(){
      $slider.find("> ul").append('<li></li>');
    });
      
    // Put .show on the first Slide
    $slider.find("div:first-of-type").addClass("show");
      
    // Put .showLi on the first dot
    $slider.find("li:first-of-type").addClass("showli")

     //fadeout all items except .show
    $slider.find("> div").not(".show").fadeOut();
    
    // If Autoplay is set to 'on' than start it
    if (set.autoPlay === "on") {
        startSlider(); 
    } 
    
    // If showarrows is set to 'on' then don't hide them
    if (set.showArrows === "on") {
        $slider.addClass('showArrows'); 
    }
    
    // If hideDots is set to 'on' then hide them
    if (set.hideDots === "on") {
        $slider.addClass('hideDots'); 
    }
    
    // If hoverZoom is set to 'off' then stop it
    if (set.hoverZoom === "off") {
        $slider.addClass('hoverZoomOff'); 
    }
    
    // If titleBarTop is set to 'on' then move it up
    if (set.titleBarTop === "on") {
        $slider.addClass('titleBarTop'); 
    }

    // function to start auto play
    function startSlider() {
      sliderIntervalID = setInterval(function() {
        nextSlide();
      }, set.slidePause);
    }
    
    // on mouseover stop the autoplay
    $slider.mouseover(function() {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });
      
    // on mouseout starts the autoplay
    $slider.mouseout(function() {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    //on right arrow click
    $slider.find("> .right").click(nextSlide)

    //on left arrow click
    $slider.find("> .left").click(prevSlide);
      
    // Go to next slide
    function nextSlide() {
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      changeCarousel(position);
    }
    
    // Go to previous slide
    function prevSlide() {
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      changeCarousel(position);
    }

    //when user clicks slider button
    $slider.find(" > ul > li").click(function() {
      position = $(this).index();
      changeCarousel($(this).index());
    });

    //this changes the image and button selection
    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider
        .find("> div")
        .eq(position)
        .fadeIn(set.fadeSpeed)
        .addClass("show");
      // The Dots
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };
})(jQuery);


 
//////////////////////////////////////////////
// Activate each slider - change options
//////////////////////////////////////////////
$(document).ready(function() {
  
  $("#slider1").sliderResponsive({
  });
  
  $("#slider2").sliderResponsive({
    fadeSpeed: 300,
    autoPlay: "off",
    showArrows: "on",
    hideDots: "on"
  });
  
  $("#slider3").sliderResponsive({
    hoverZoom: "off",
    hideDots: "on"
  });
  
}); 



  return (
  <div>
    <div className="slider" id="slider1">
    <div style={{"backgroundImage":`url(${pic1})`}}></div>
    <div style={{"backgroundImage":`url(${pic2})`}}></div>
    <div style={{"backgroundImage":`url(${pic3})`}}></div>
    <div style={{"backgroundImage":`url(${pic4})`}}></div>
    <div style={{"backgroundImage":`url(${pic5})`}}></div>
  
    <i className="left arrows"style={{"zIndex":"2", "position":"absolute"}}><svg viewBox="0 0 100 100">
            <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
        </svg></i>
    <i className="right arrows" style={{"zIndex":"2", "position":"absolute"}}><svg viewBox="0 0 100 100">
            <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path>
        </svg></i>
  
   
</div>

<br/>

<div className="row2Wrap">

    <div className="slider" id="slider2">

        <div style={{"backgroundImage":`url(${pic6})`}}></div>
        <div style={{"backgroundImage":`url(${pic7})`}}></div>
        <div style={{"backgroundImage":`url(${pic4})`}}></div>
        <div style={{"backgroundImage":`url(${pic3})`}}></div>

        {/* <i className="left arrows" style={{"zIndex":"2", "position":"absolute"}}>
            <svg viewBox="0 0 100 100">
                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
            </svg>
        </i>
        <i className="right arrows" style={{"zIndex":"2", "position":"absolute"}}>
            <svg viewBox="0 0 100 100">
                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path>
            </svg>
        </i> */}
       
    </div>

   
    <div className="slider" id="slider3">
        <div style={{"backgroundImage":`url(${pic8})`}}>
           
        </div>
        <div style={{"backgroundImage":`url(${pic10})`}}>
          
        </div>
        <div style={{"backgroundImage":`url(${pic9})`}}>
           
        </div>
       
        <i className="left arrows" style={{"zIndex":"2", "position":"absolute"}}><svg viewBox="0 0 100 100">
                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
            </svg></i>
        <i className="right arrows" style={{"zIndex":"2", "position":"absolute"}}>
            <svg viewBox="0 0 100 100">
                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" transform="translate(100, 100) rotate(180) "></path>
            </svg></i>
      
    </div>

</div>
</div>
  )
}
