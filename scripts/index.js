// declare variable to store navbar element
const navElement = document.getElementById("navbar")
// detect scroll evnet on document
document.addEventListener('scroll',function() {
    // console.log(window.scrollY);
    if (window.scrollY > 150) {
        // change nav bar bg to blue
        navElement.style.backgroundColor = "pink";
    }
    else {
        // change nav bar to transparent
        navElement.style.backgroundColor = "rgba(255,255,255,0.2)";
    }
});


function goToSite() {
      window.location.href = "https://example.com"; 
    }

