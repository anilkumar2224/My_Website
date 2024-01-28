
(function () {

    var preloder = document.getElementById('preloder');
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame() {
        if (loading == 130) {
            clearInterval(id);
          window.open("main.html", "_self");
          
        } else {
            loading = loading + 1;
            if (loading == 120) {
                preloder.style.animation = "fadeout 1s ease";
            }
        }
    }
   

})();
