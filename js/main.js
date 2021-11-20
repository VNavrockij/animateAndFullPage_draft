(function () {
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
      console.log("drag");
  });

  document.addEventListener('drop', (e) => {
    e.preventDefault();
      console.log("drop");
  });
})();

window.onload = function startFullPage() {
        
  new fullpage('#fullpage',{
    navigation: true,
    onLeave: function(origin, destination, direction){
      // variables
        const isAnimatedSecond = document.querySelectorAll('.second .row div.is-animated');
        const isAnimatedSecondSingle = document.querySelector('.second .row div.is-animated__single');

        const isAnimatedThird = document.querySelectorAll('.third .row div.is-animated');
        const isAnimatedThirdSingle = document.querySelector('.third .row div.is-animated__single');

        const isAnimatedFourth = document.querySelectorAll('.fourth .row div.is-animated');
        const isAnimatedFourthSingle = document.querySelector('.fourth .row div.is-animated__single');
      //first
      if (origin.index == 0 && destination.index == 1) { 
        isAnimatedSecond.forEach((el, i) => {
          el.classList.add('animate__animated', 'animate__bounceInLeft');
          el.style.setProperty('--animate-duration', (i + 1) + 's');
        });
        isAnimatedSecondSingle.classList.add('animate__animated', 'animate__rollIn');
        isAnimatedSecondSingle.style.setProperty('--animate-duration', '1.7s');
      // second
      } else if ((origin.index == 0 || origin.index == 1) && destination.index == 2) {
        for (i = 0; i < isAnimatedThird.length; i++) {
          if (i == 0) {
            isAnimatedThird[i].classList.add('animate__animated', 'animate__bounceInRight');
            isAnimatedThird[i].style.setProperty('--animate-duration', '2s');
          }
          if (i == 1) {
            isAnimatedThird[i].classList.add('animate__animated', 'animate__bounceInLeft');
            isAnimatedThird[i].style.setProperty('--animate-duration', '3s');
          }
        }
        isAnimatedThirdSingle.classList.add('animate__animated', 'animate__rollIn');
        isAnimatedThirdSingle.style.setProperty('--animate-duration', '1.7s');
      // third
      } else if ((origin.index == 0 || origin.index == 1 || origin.index == 2) && destination.index == 3) {
        isAnimatedFourth.forEach((el) => {
          el.classList.add('animate__animated', 'animate__zoomIn');
          el.style.setProperty('--animate-duration', '1.7s');
        });
        isAnimatedFourthSingle.classList.add('animate__animated','animate__rollIn');
      }
    },
  });
}