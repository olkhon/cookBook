var button = document.getElementsByClassName("alertWindowLocation");

var myFunction = function () {
  alert(
    "Here you see the URL of this page: \n\n " +
      window.location.href +
      " \n\n You can see the URL above! "
  );
};

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", myFunction, false);
}





$(document).ready(function () {
	//  alert('jquery is successfully running');
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

}); 