

(function(){

    // changes the display of header based on the position of user scroll
    function headerDisplay(){

        // Get header 
        var header = document.querySelector('header');
        console.log(header);

        window.addEventListener('scroll', function(){
    
            
            if (window.matchMedia("(min-width: 400px)").matches) {
                /* the viewport is at least 400 pixels wide */
                if (window.scrollY >= 600) {
                    header.className = "header2";
                } 
    
                if (window.scrollY < 600) {
                    header.className = "header1"
                }
                
              } else {
                /* the viewport is less than 400 pixels wide */
                if (window.scrollY >= 338) {
                    header.className = "mobile-header2"
                } 
    
                if (window.scrollY < 338) {
                    header.className = "mobile-header1";
                }
              }
        });
    }



    headerDisplay();

})();