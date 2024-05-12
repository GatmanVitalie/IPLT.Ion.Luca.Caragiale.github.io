window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.stat');
  
    elements.forEach(function(element) {
      var position = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
  
      if (position < screenHeight * 0.75) {
      var t1=1, t2=1.1, t3=1.2, t4=1.3;
      var v1=1.437, v2=8.16, v3=73, v4=26;
      var t=0;
      while (t < t4*1000)
        {
            setTimeout(function() {t+=10;}, 10);
            element.style.transform = 'translateY(' + (v1*Math.sin(t/t1) + v2*Math.sin(t/t2) + v3*Math.sin(t/t3) + v4*Math.sin(t/t4)) + 'px)';
            console.log(t);
        }
    }
    });
  });

  