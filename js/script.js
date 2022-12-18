
// Header Animation, transparents to color
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  }); 
    


// Click vào thanh navbar mobile sẽ hiện ra
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


// Click vào ô search
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


// Click vào giỏ hàng
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


// cuộn màn hình mất giỏ hàng, search, navbar mobile
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Xóa sản phẩm
    /* Get all elements with class="close" */
    var closebtns = document.getElementsByClassName("fa-times");
    var i;
    
    /* Loop through the elements, and hide the parent, when clicked on */
    for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
      });
    }

    
// gallery popup
$(document).ready(function() {
    $('.gallerys-item').magnificPopup({
        type:'image',
        delegate:'a',
        gallery: {enabled:true}
    });
});

// Dark mode


