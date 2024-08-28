function showContent(selectedValue) {
    document.getElementById('daysContent').style.display = (selectedValue === 'days') ? 'block' : 'none';
    document.getElementById('dateContent').style.display = (selectedValue === 'date') ? 'block' : 'none';
    document.getElementById('everytimeContent').style.display = (selectedValue === 'everytime') ? 'block' : 'none';
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.profile-hdr')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function showLoader() {
    document.getElementById("loader").classList.add("active");
    setTimeout(function () {
        document.getElementById("loader").classList.remove("active");
    }, 500000); // 5000 milliseconds = 5 seconds
}