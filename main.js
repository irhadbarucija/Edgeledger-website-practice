window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
        console.log('uslo');
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

let map;

function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: 43.856430, lng: 18.413029 },
    zoom: 12,
  });
}

$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
})