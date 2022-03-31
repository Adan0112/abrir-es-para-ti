let si = document.getElementById("yesBtn");

si.addEventListener("click", function (e) {
  swal({
    title: "Gracias sabia que aceptarias...•♥️• ",
    icon: "success"
    
  });
  
});
let no = document.getElementById("noBtn");

no.addEventListener("mousemove", function (e) {
  let x = Math.round(Math.random() * 93);
  let y = Math.round(Math.random() * 93);
  no.style.left = x + "%";
  no.style.top = y + "%";
});
