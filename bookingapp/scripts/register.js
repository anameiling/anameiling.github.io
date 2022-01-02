function Register(username, useremail, userpassword){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingApp/register';
    let body = {
        register: {
            name: username,
            email: useremail,
            password: userpassword
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
        alert(json.register.name + " registered!");
        console.log(json.register);
    });
}

window.addEventListener("load", function() {
    document.getElementById("register").addEventListener("click", function() {
        let username = document.getElementById("username").value;
        let useremail = document.getElementById("email").value;
        let userpassword = document.getElementById("password").value;
        
        Register(username, useremail, userpassword);
    });
});

