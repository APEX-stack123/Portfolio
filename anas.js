function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };


const serviceID = "service_kzrurcn";
const templateID = "template_fe40vxr";

emailjs
.send(serviceID, templateID, params)
.then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your message sent successfully");
})
.catch((err) => console.log(err));
}