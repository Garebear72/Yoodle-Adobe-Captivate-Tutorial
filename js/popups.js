
tippy('#popper-info', {
  allowHTML: false,
  placement: 'top',
  animation: 'scale',
  duration: 300,
  content: 'I will provide you with hints through-out this guide!',
  trigger: 'mouseenter focus click'
});

tippy('#popper1', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: '<img class="img-fluid" src="assets/images/faq1.png">',
  trigger: 'mouseenter focus click'
});

tippy('#popper2', {
  allowHTML: true,
  maxWidth: 800,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: '<img class="img-fluid" src="assets/images/faq2.gif">',
  trigger: 'mouseenter focus click'
})

tippy('#popper3', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: '<img class="img-fluid" src="assets/images/faq3.png">',
  trigger: 'mouseenter focus click'
});

tippy('#popper4', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: '<img class="img-fluid" src="assets/images/faq4.png">',
  trigger: 'mouseenter focus click'
});

tippy('#popper5', {
  allowHTML: true,
  placement: 'auto',
  maxWidth: 600,
  animation: 'perspective',
  duration: 400,
  content: '<img class="img-fluid" src="assets/images/faq5.png">',
  trigger: 'mouseenter focus click'
});

tippy('#popper6', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: '<img class="img-fluid" src="assets/images/faq6.png">',
  trigger: 'mouseenter focus click'
});

tippy('#popper7', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: '<b class="custom-color-1">CTRL +</b> and <b class="custom-color-1">CTRL -</b><br>(⌘ Mac)',
  trigger: 'mouseenter focus click'
});

tippy('#popper8', {
  allowHTML: false,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  content: 'A Responsive Project is generally way better to use. It has a mechanic called "Fluid Boxes" which allow you to add content to your slides that will adapt to any screen size.',
  trigger: 'mouseenter focus click'
});

tippy('#popper9', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  interactive: true,
  content: 'There\'s a fourth pane that will be incredibly useful to you another time called the "Timeline". It\'s located at the very bottom of the image right below me. <br><br><a href="https://helpx.adobe.com/in/captivate/using/timeline.html" target="_blank">Check it out.</a>',
  trigger: 'mouseenter focus click'
});

tippy('#popper10', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  duration: 400,
  interactive: true,
  content: '<img class="img-fluid" src="assets/images/tut17.png">',
  trigger: 'mouseenter focus click'
});

tippy('#popper11', {
  allowHTML: true,
  placement: 'auto',
  animation: 'perspective',
  maxWidth: 1000,
  duration: 400,
  content: '<p class="fs-4 mb-1">Remember when we did this? <br>The default settings for the project are in there.</p><img class="img-fluid" src="assets/images/tut2.png">',
  trigger: 'mouseenter focus click'
});







// $(document).ready(function(){
    
//     var popover1 = new bootstrap.Popover(document.querySelector('[title="Interactables"]'), {
//         placement: 'auto',
//         trigger: 'hover',
//         html: true,
//         content:'<img src="assets/images/faq1.png"/>'
//       })

//     var popover2 = new bootstrap.Popover(document.querySelector('[title="Timeline"]'), {
//         placement: 'auto',
//         trigger: 'click',
//         html: true,
//         container: '#faq',
//         content:'<img class="img-fluid" src="assets/images/faq2.gif"/>',
//       })

//       popover1.enable();
//       popover2.enable();
      

    // $('[title="Timeline"]').popover({
    //     padding: 800,
    //     placement: 'auto',
    //     trigger: 'click',
    //     html: true,
    //     //container: '.container',
    //     content:'<img class="img-fluid" src="assets/images/faq2.gif"/>',
    // });
// })