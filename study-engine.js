function loadActive(items) {
    items.forEach(element => {
        element.addEventListener("click", () => {
            items.forEach(i => i.classList.remove("active"));
            element.classList.add("active");
        });
    });
}

function subscribeToast() {
    const emailField = document.querySelector("subscription-email");
    const toastEl = document.getElementById("subscribe-toast");
    toastEl.classList.remove("d-none");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

const dashboardOptions = document.querySelectorAll("#below-navbar .nav-link");
const navbarOptions = document.querySelectorAll(".navbar-nav .nav-link");
const notificationSidebar = document.querySelector("#notification-sidebar");
loadActive(dashboardOptions);
loadActive(navbarOptions);

document.addEventListener("DOMContentLoaded",function(event){
  let circle=document.querySelectorAll(".my-circle");
  circle.forEach(function(progress){
    let degree=0;
    var targetDegree=parseInt(progress.getAttribute("data-degree"));
    let color=progress.getAttribute("data-color");
    let number=progress.querySelector(".my-number");

    var interval=setInterval(function(){
      degree+=1;
      if(degree>targetDegree){
        clearInterval(interval);
        return;
      }
      progress.style.background=`conic-gradient(${color} ${degree}%, #222 0%)`;
    },50);
  });
});