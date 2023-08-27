const d = document;

d.addEventListener("DOMContentLoad",(e)=>{
});

d.addEventListener("click",(e)=>{
    let $nav = d.querySelector(".navbar");
    let $i = d.querySelector("#menu-responsive");
    let $navmenu = d.querySelectorAll("li a");
    const $img = d.querySelector(".one");
    switch (e.target.className) {
      case "uno":
        $img.src = "img/main1.png";
        break;
      case "dos":
        $img.src = "img/main2.png";
        break;
      case "tres":
        $img.src = "img/main3.png";
        break;
      case "overview":
        $navmenu.forEach(element =>{
          element.classList.remove("active");
        });
        $navmenu[0].classList.add("active");
        break;
      case "teach":
        $navmenu.forEach(element => {
          element.classList.remove("active");
        });
        $navmenu[1].classList.add("active");
        break;
      case "reviews":
        $navmenu.forEach(element => {
          element.classList.remove("active");
        });
        $navmenu[2].classList.add("active");
        break;
      case "contact":
        $navmenu.forEach(element => {
          element.classList.remove("active");
        });
        $navmenu[3].classList.add("active");
        break;
      case $i.className:
        $i.classList.toggle("fa-xmark");
        $nav.classList.toggle("open");
        break;
      default:
        break;
    }
});
