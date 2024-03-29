function Register(username, email, password){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingSessionSystem/register';
    let body = {
        register: {
            name: username,
            email: email,
            password: password
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then(json => {
        alert(json.register.name + " registered!");
        console.log(json.register);
    });
}

window.addEventListener("load", function() {
    document.getElementById("register").addEventListener("click", function() {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPassword = document.getElementById("userPassword").value;
        
        Register(userName, userEmail, userPassword);
    });
});

