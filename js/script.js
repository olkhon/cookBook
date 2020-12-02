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


/* functions mouse over displaying h content, stills needs some improvements */

function displayHeadlineOne() {

    var headline = document.createElement("h5"); // Create h5 element
    headline.style.color = "black";
    var headlineText = document.createTextNode("Vegetarian biryani!"); // Create a text node
    headline.appendChild(headlineText); // Append the text to headline
    document.getElementById("recipeOne").appendChild(headline);
}


function removeHeadlineOne() {
    var headlineDiv = document.getElementById("recipeOne");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}

function displayHeadlineTwo() {

    var headline = document.createElement("h5"); // Create h5 element
    headline.style.color = "black";
    var headlineText = document.createTextNode("Chinese eggplant with spicy szechuan sauce"); // Create a text node
    headline.appendChild(headlineText); // Append the text to headline
    document.getElementById("recipeTwo").appendChild(headline);
}

function displayHeadlineThree() {

    var headline = document.createElement("h5"); // Create h5 element
    headline.style.color = "black";
    var headlineText = document.createTextNode("Portobello mushroom burger"); // Create a text node
    headline.appendChild(headlineText); // Append the text to headline
    document.getElementById("recipeThree").appendChild(headline);
}

function displayHeadlineFour() {

    var headline = document.createElement("h5"); // Create h5 element
    headline.style.color = "black";
    var headlineText = document.createTextNode("Orecchiette with creamy carrot miso sauce"); // Create a text node
    headline.appendChild(headlineText); // Append the text to headline
    document.getElementById("recipeFour").appendChild(headline);
}

function displayHeadlineFive() {

    var headline = document.createElement("h5"); // Create h5 element
    headline.style.color = "black";
    var headlineText = document.createTextNode("Vegan tlayudas!"); // Create a text node
    headline.appendChild(headlineText); // Append the text to headline
    document.getElementById("recipeFive").appendChild(headline);
}


function displayHeadlineSix() {

    var headline = document.createElement("h5"); // Create h5 element
    headline.style.color = "black";
    var headlineText = document.createTextNode("Bali bowls with peanut tofu"); // Create a text node
    headline.appendChild(headlineText); // Append the text to headline
    document.getElementById("recipeSix").appendChild(headline);
}



/* mouse out functions -> to do */

function removeHeadlineOne() {
    var headlineDiv = document.getElementById("recipeOne");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}

function removeHeadlineTwo() {
    var headlineDiv = document.getElementById("recipeTwo");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}

function removeHeadlineThree() {
    var headlineDiv = document.getElementById("recipeThree");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}

function removeHeadlineFour() {
    var headlineDiv = document.getElementById("recipeFour");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}

function removeHeadlineFive() {
    var headlineDiv = document.getElementById("recipeFive");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}

function removeHeadlineSix() {
    var headlineDiv = document.getElementById("recipeSix");
    headlineDiv.removeChild(headlineDiv.childNodes[0]);
}