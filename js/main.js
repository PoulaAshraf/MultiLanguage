let ar = document.getElementById("ar");
let en = document.getElementById("en");
let msg = document.getElementById("title");
let alerting = document.getElementById("alerting");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let desc = document.getElementById("desc");


ar.onclick = () => {
    setLan("ar");
    localStorage.setItem("lang", "ar");
};

en.onclick = () => {
    setLan("en");
    localStorage.setItem("lang", "en");
};

onload = () => {
    setLan(localStorage.getItem("lang"));
};
function setLan(getLan){
    if(getLan === "ar"){
        msg.innerHTML = "صفحتى";
        alerting.innerHTML = "تتصفح بنجاح";
        about.innerHTML = "عنا";
        contact.innerHTML = "اتصل بنا";
        desc.innerHTML = "انا مهندس برمجيات";
    }else if(getLan === "en"){  
        msg.innerHTML = "My Webpage";
        alerting.innerHTML = "Successfuly Browsing";
        about.innerHTML = "About Us";
        contact.innerHTML = "Contact US";
        desc.innerHTML = "I'm a software developer";
    }
}