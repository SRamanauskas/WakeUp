$(document).foundation();

var modal = document.querySelector('.js-modal');
var modalOverlay = document.querySelector('.js-modal-overlay');
var closeButton = document.querySelector('.js-close-button');
var openButton = document.querySelector('.js-open-button');
var body = document.querySelector('.js-body');



//Top-bar navigation
$('.js-hamburger').on('click', function (e) {
    var element = $(e.target);
    var hamburger = element.hasClass('js-hamburger') ? element : element.parent();
    console.log(element);
    hamburger.toggleClass('is-clicked');
    $('body').toggleClass('is-inactive');
    $('.js-logo').toggleClass('is-inactive');
    $('.js-wrapper').toggleClass('is-expanded');
});

//Footer All Rights Reserved
$(document).ready(function () {
    var date = new Date();
    var year = date.getFullYear();

    $('.js-rights').text('© ' + year + ' Wake Up Kaunas, Visos Teisės Saugomos.');
});


// Marker in the map of Wake Up Kaunas
var map;
function initMap() {
    var position = { lat: 54.915975, lng: 23.833136 };
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h3 class="firstHeading">Wake Up Kaunas</h3>' +
        '<div id="bodyContent">' +
        '<p>Pirmasis parkas Kaune, ilgiausia trasa Europoje</p>' +
        '</div>';

    map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15
    });
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15
    });

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Wake Up Kaunas'
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}

//Toogling modal window of live translation
if(document.querySelector('.js-modal')) {

    function toggleClasses() {
        modal.classList.toggle('closed');
        modalOverlay.classList.toggle('closed');
        body.classList.toggle('scroll');
    }

    openButton.addEventListener('click', toggleClasses);
    modalOverlay.addEventListener('click', toggleClasses);
    
    closeButton.addEventListener('click', function() {
        event.stopPropagation();
        modal.classList.toggle('closed');
        modalOverlay.classList.toggle('closed');
        body.classList.toggle('scroll');
    });
}

//Date of present day to reservation-date input
if(document.getElementById('date')) {
    document.getElementById('date').addEventListener('click', function(){
        document.getElementById('date').value = new Date().toLocaleDateString();
    });   
}
