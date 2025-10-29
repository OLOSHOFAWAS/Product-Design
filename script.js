
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       nav.classList.toggle('show-menu')
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')
function sendEmail() {

        var fullName = document.getElementById("Name").value;
        var phoneNumber = document.getElementById("Phone").value;
        var email = document.getElementById("Email").value;
        var pack = document.getElementById("Pack").value;
        var ready = document.getElementById("Ready").value;
        var address = document.getElementById("Address").value;
        var state = document.getElementById("State").value;

        var bodyMessage = "Full Name: " + fullName + "<br> Email: " + email + "<br> Phone Number: "  + phoneNumber + "<br> Package: " + pack + "<br> Ready: " + ready + "<br> Address: " + address + "<br>  State: " + state ;

    Email.send({
        SecureToken : "23e6a165-3162-4645-9af6-e5a887fda43b",
        To : 'shenesthealthyliving@gmail.com',
        From : "shenesthealthyliving@gmail.com",
        Subject : "New Form Submission From Shenest",
        Body : bodyMessage
    }).then(
         message => {
                if (message === "OK") {
                    swal("Successful!", "Request Submitted Successfully", "success");
                } else {
                    swal("Error!", "Try Again!", "error");
                }
            }
        );
}

