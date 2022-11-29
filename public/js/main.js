//parallex effect function
function parallaxEffect() {
  let scene = document.querySelectorAll(".scene");
  scene.forEach((elem) => {
    let modifier = elem.getAttribute("data-modifier");
    basicScroll
      .create({
        elem: elem,
        from: 0,
        to: 519,
        direct: true,
        props: {
          "--translateY": {
            from: "0",
            to: `${10 * modifier}px`,
          },
        },
      })
      .start();
  });
}
parallaxEffect();

function getUsersData() {
  //posts per page
  let ppp = 10;
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
        $("#users_data").append(`<div class="card card-users">
				<div class="card-user-title">Name:<span>${fullName}</span></div>
				<div class="card-user-title">Email:<span>${users.results[i].email}</span></div>
				<div class="card-user-title">Phone:<span>${users.results[i].phone}</span></div>
				<div class="card-user-title">Street:<span>${location}</span></div>
				<div class="card-user-title">City:<span>${users.results[i].location.city}</span></div>
				<div class="card-user-title">Zipcode:<span>${users.results[i].location.zipcode}</span></div>
				</div>`);
      }
      console.log(users.results.length);
      console.log(users); //
    },
  });
}
getUsersData();
