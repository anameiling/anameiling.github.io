function Login(loginName, loginPassword){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingApp/login';
    let body = {
        login: {
            name: loginName,
            password: loginPassword
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
        console.log(json.login);
    });
}

window.addEventListener("load", function() {
    document.getElementById("login").addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let userPhone = document.getElementById("userPhone").value;
        let userPax = document.getElementById("userPax").value;
        let userSlot = document.getElementById("userSlot").value;
        let userMessage = document.getElementById("userMessage").value;
        
        Login(username, password);
    });
});

