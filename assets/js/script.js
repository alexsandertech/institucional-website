function setMenuStateMobile(){
    if(window.innerWidth<=1000){
        if(document.getElementById('menuM').checked == false){
            let statusM = document.querySelector(".homeSide");
            statusM.style.display = "none";
            statusM = document.querySelector(".slide");
            statusM.style.display = "none";
            statusM = document.querySelector("#about");
            statusM.style.display = "none";
            statusM = document.querySelector("#clients");
            statusM.style.display = "none";
            statusM = document.querySelector("#services");
            statusM.style.display = "none";
            statusM = document.querySelector("#contact");
            statusM.style.display = "none";
            statusM = document.querySelector("footer");
            statusM.style.display = "none";
            statusM = document.querySelector(".itemsMenuBar");
            statusM.style.display = "flex";
        } else {
            let statusM = document.querySelector(".homeSide");
            statusM.style.display = "flex";
            statusM = document.querySelector(".slide");
            statusM.style.display = "flex";
            statusM = document.querySelector("#about");
            statusM.style.display = "block";
            statusM = document.querySelector("#clients");
            statusM.style.display = "block";
            statusM = document.querySelector("#services");
            statusM.style.display = "block";
            statusM = document.querySelector("#contact");
            statusM.style.display = "block";
            statusM = document.querySelector("footer");
            statusM.style.display = "flex";
            statusM = document.querySelector(".itemsMenuBar");
            statusM.style.display = "none";

        }   
    }
}
