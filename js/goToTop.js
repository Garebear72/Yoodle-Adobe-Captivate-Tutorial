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
let x = true;
function amountscrolled(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);
    //console.log(pctScrolled + '% scrolled');

    if (pctScrolled >= 5) {
        if (x === true) {
            $('.hovering-up-button').addClass('hovering-up-div');
        }
        
        $('.hovering-up-button').removeClass('hovering-down-div');
        $('#hovering-up-div-id').removeClass('invisible');
    }
    else {
        x = true
        $('.hovering-up-button').removeClass('hovering-up-div');
        $('.hovering-up-button').addClass('hovering-down-div');
    }
};

 
getmeasurements();

// function delay(ms) {
//     $('.hovering-up-button').removeClass('shakeyshake');
//     return new Promise(resolve => setTimeout(resolve, ms));
    
// }

// delay(3000).then(() => $('.hovering-up-button').addClass('shakeyshake'));


function test() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);
    let y = false;

    if (pctScrolled >= 6) {
        y = true;
        $('.hovering-up-button').addClass('shakeyshake');
        console.log('I\'m scrolled down enough, attempting to deal with a promise...');
    }
    else {
        console.log('Not scrolled down far enough, trying again...')
        y = false;
        setTimeout(function() {test()}, 2000);
    }

    setTimeout(function() { 
        if (y === true) {
            x = false
            $('.hovering-up-button').removeClass('shakeyshake');
            $('.hovering-up-button').removeClass('hovering-up-div');
            console.log('Function executed, waiting 20000ms.')
            setTimeout(function() {test()}, 20000);
        }
    }, 1000);
};

test();




 
window.addEventListener("resize", function(){
    getmeasurements();
}, false);
 
window.addEventListener("scroll", function(){
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout(function(){ 
        // throttle code inside scroll to once every 50 milliseconds
        amountscrolled()
    }, 7);
}, false)


$(document).ready(function() {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    var pctScrolled = Math.floor(scrollTop/trackLength * 100);

    if (pctScrolled >= 5) {
        $('.hovering-up-button').addClass('hovering-up-div');
        $('.hovering-up-button').removeClass('hovering-down-div');
    }
});




