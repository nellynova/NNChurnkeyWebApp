// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//Set Variables
var slideIndex = 1;
var pathname = window.location.pathname;

//Show the initial slide & hide about tab
showSlides(slideIndex);

//Called everytime an arrow button is clicked
//Parameter n to determine which direction to move in
function switchSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {

    //Get the slides
    if (document.getElementsByClassName('slide').length > 0) {
        var slides = document.getElementsByClassName("slide");

        //If the user has reached the end of the slides, reset to 1
        if (n > slides.length) {
            slideIndex = 1;
        }

        //If the user has reached the beginning of the slides, set the next slide to the last slide
        if (n < 1) {
            slideIndex = slides.length;
        }

        //Iterate through the slides and hide them
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        //Show the current slide
        slides[slideIndex - 1].style.display = "block";
    }
}

function switchTab(elemid) {
    //get about btn and tab
    var aboutTab = document.getElementById("aboutUs");
    var btnAbout = document.getElementById("btnAbout");

    //get browse btn and tab
    var browseTab = document.getElementById("browseShows");
    var btnBrowse = document.getElementById("btnBrowse");

    //show/hide tabs based on which button the user clicks & change button style
    if (elemid == btnAbout.id) {
        aboutTab.style.display = "block";
        browseTab.style.display = "none";
        btnAbout.classList.replace("btn-primary", "btn-outline-primary");
        btnBrowse.classList.replace("btn-outline-primary", "btn-primary");
    }
    else if (elemid == btnBrowse.id) {
        browseTab.style.display = "block";
        aboutTab.style.display = "none";

        btnAbout.classList.replace("btn-outline-primary", "btn-primary");
        btnBrowse.classList.replace("btn-primary", "btn-outline-primary");
    }
    else {
        alert("Error: Please reload and try again.")
    }
}

//check if the cancel button exists & if so, add the event listener
if (document.getElementById('btnCancel')) {
    document.getElementById('btnCancel').addEventListener('click', function () {
        window.churnkey.init('show', {
            customerId: 'cus_QVBhnykr03RYfs', // demo customer in the test Stripe account
            authHash: '7f1da09c01c5c3df88fda9747c27ce728461db6599c0d2f594d62e58502bfff3', // you'll need to calculate this (Step 2 of Quick Start)
            appId: 'vupg9mh6t', // also found on Settings | Organization
            mode: 'test',
            provider: 'stripe',
            preview: true, // set to true so that no billing actions are actually taken
            record: false, // to disable session recording
            report: false, // to disable session reporting (used for analytics)
        })
    })
}