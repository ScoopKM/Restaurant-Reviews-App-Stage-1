if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    console.log('Yay!');
    }).catch(function() {
      console.log('Boo!')
    });
  };
