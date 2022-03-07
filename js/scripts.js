var typed = new Typed('.typed-words', {
			strings: ["RESERVE", "Purchase"],
			typeSpeed: 80,
			backSpeed: 80,
			backDelay: 4000,
			startDelay: 1000,
			loop: true,
			showCursor: true
		});



		$('#recipeCarousel').carousel({
			interval: 3000
		})

		$('.carousel .carousel-item').each(function(){
			var minPerSlide = 3;
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i=0;i<minPerSlide;i++) {
				next=next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
				}

				next.children(':first-child').clone().appendTo($(this));
			}
		});

		