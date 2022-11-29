//Parallax effect function
function parallaxEffect() {
 
$(window).scroll(function() {
  const 
    a = $(this).scrollTop(),
    b = 800;
  $("h1").css({
    backgroundPosition: "center " + a / 2 + "px" 
  });
  $(".parallax").css({ 
    top: a / 1.6 + "px", 
    opacity: 1 - a / b 
  });
});

document.addEventListener("scroll", () => {
  const 
    top = window.pageYOffset,
    one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three");
    one.style.bottom = -(top * 0.1) + "px";
    two.style.bottom = -(top * 0.4) + "px";
    three.style.bottom = -(top * 0.6) + "px";
  
});
}
parallaxEffect();

// Get Users data from API
function getUsersData() {
  //posts per page
  let ppp = 9;
  $.ajax({
    url: "https://randomuser.me/api/?results=" + ppp,
    dataType: "json",
    success: function (users) {
      for (let i = 0; i < users.results.length; i++) {
        let fullName =
          users.results[i].name.first + " " + users.results[i].name.last;
        let location =
          users.results[i].location.street.name +
          " " +
          users.results[i].location.street.number;
        $("#users_data").append(`<div class="card card-user">
				<div class="card-user-title">Name:<span>${fullName}</span></div>
				<div class="card-user-title">Email:<span>${users.results[i].email}</span></div>
				<div class="card-user-title">Phone:<span>${users.results[i].phone}</span></div>
				<div class="card-user-title">Street:<span>${location}</span></div>
				<div class="card-user-title">City:<span>${users.results[i].location.city}</span></div>
				<div class="card-user-title">Zipcode:<span>${users.results[i].location.postcode}</span></div>
				</div>`);
      }
      console.log(users.results.length);
      console.log(users); //
    },
  });
}
getUsersData();

//Animate on Scroll
function animateOnScroll() {
	$(window).scroll( function(){
		$('.card').each( function(i){
			delay =(i)*250;
			let bottom_of_object = $(this).offset().top + $(this).outerHeight();
			let bottom_of_window = $(window).scrollTop() + $(window).height();
			
			if( bottom_of_window > bottom_of_object ){
				$(this).delay(delay).animate({'opacity':'1'},500);
			}
		}); 
	});	
}
animateOnScroll();