let form = document.querySelector("form");
let userinfo = {};
function handleSumbit(event){
    event.PreventDefault();
    userinfo.text = form.elements.text.value;
    userinfo.emails = form.elements.emails.value;
    userinfo.gender = form.elements.gender.value;
    userinfo.email = form.elements.email.value;
    userinfo.drone = form.elements.drone.checked;
    userinfo.terms = form.elements.terms.value;

    console.log(userinfo);
    

}

form.addEventListener("sumbit",handleSumbit);