// function enlargeSidebar() {
//     var sidebar = document.querySelector('.sidebar');
//     sidebar.classList.toggle('enlarged');
//   }
  
// var isEnlarged = false;

//   function toggleSidebar() {
//     var sidebar = document.querySelector('.sidebar');
    
//     if (isEnlarged) {
//       sidebar.classList.remove('enlarged');
//     } else {
//       sidebar.classList.add('enlarged');
//     }
    
//     isEnlarged = !isEnlarged;
//   }

function showNewSidebar() {
    var newSidebar = document.getElementById("newSidebar");
    newSidebar.classList.toggle("hidden");
    if (newSidebar.classList.contains("hidden")) {
      newSidebar.style.transform = "translateX(-100%)";
    } else {
      newSidebar.style.transform = "translateX(0)";
    }
  }