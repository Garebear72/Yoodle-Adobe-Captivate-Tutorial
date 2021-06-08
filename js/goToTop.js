var winheight, docheight, trackLength, throttlescroll;


function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
};
 
function getmeasurements(){
    winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = getDocHeight();
    trackLength = docheight - winheight;
}
 
function amountscrolled(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);
    //console.log(pctScrolled + '% scrolled');

    if (pctScrolled >= 3) {
        $('#hovering-up-div-id').addClass('hovering-up-div');
        $('#hovering-up-div-id').removeClass('hovering-down-div');
        $('#hovering-up-div-id').removeClass('invisible');
    }
    else {
        $('#hovering-up-div-id').removeClass('hovering-up-div');
        $('#hovering-up-div-id').addClass('hovering-down-div');

    }
};

 
getmeasurements();
 
window.addEventListener("resize", function(){
    getmeasurements();
}, false);
 
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout(function(){ 
        // throttle code inside scroll to once every 50 milliseconds
        amountscrolled()
    }, 1);
}, false)


$(document).ready(function() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);

    if (pctScrolled >= 3) {
        $('#hovering-up-div-id').addClass('hovering-up-div');
        $('#hovering-up-div-id').removeClass('hovering-down-div');
    }
});

$('#hovering-up-div-id').addClass('invisible');


