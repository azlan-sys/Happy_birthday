(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

  document.getElementById("open").addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  const card = document.getElementById("card");

  // Play music
  if (music.paused) {
    music.play().catch(err => {
      console.log("Music play blocked:", err);
    });
  }

  // Show birthday card with animation
  card.classList.remove("hidden");
  card.classList.add("visible", "animate__animated", "animate__fadeInUp");

});


}());
