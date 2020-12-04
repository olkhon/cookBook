var button = document.getElementsByClassName("alertWindowLocation");

var myFunction = function() {
    alert(
        "Here you see the URL of this page: \n\n " +
        window.location.href +
        " \n\n You can see the URL above! "
    );
};

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", myFunction, false);
}

$(document).ready(function() {
    //  alert('jquery is successfully running');
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });

});


const cards = document.getElementsByClassName("card");

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener("mouseenter", (event) => {
        const h5Tag = event.target.childNodes[1];
        h5Tag.style.display = "block";
    });
    card.addEventListener("mouseleave", (event) => {
        const h5Tag = event.target.childNodes[1];
        h5Tag.style.display = "none";
    });
}