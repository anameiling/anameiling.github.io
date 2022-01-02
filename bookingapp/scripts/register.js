function Register(registerName, registerEmail, registerPassword){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingApp/register';
    let body = {
        register: {
            newName: registerName,
            newEmail: registerEmail,
            newPassword: registerPassword
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
        alert(json.booking.name + " added!");
        console.log(json.register);
    });
}

window.addEventListener("load", function() {
    document.getElementById("register").addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        Register(username, email, password);
    });
});

