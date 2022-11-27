//parallex effect function
function parallaxEffect() {
	let scene = document.querySelectorAll('.scene');
	scene.forEach((elem) => {
		let modifier = elem.getAttribute('data-modifier');
		basicScroll.create({
			elem: elem,
			from: 0,
			to: 519,
			direct: true,
			props: {
				'--translateY': {
					from: '0',
					to: `${ 10 * modifier }px`
				}
			}
		}).start()
	})
}
parallaxEffect();

//get users data
$.ajax({
	url: 'https://randomuser.me/api/',
	dataType: 'json',
	success: function(data) {
	  console.log(data);
	}
  });