function Login(username, password){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingSessionSystem/login';
    let body = {
        login: {
            username: username,
            password: password
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then(json => {
        console.log(json.login);
    });
}


window.addEventListener("load", function() {
    document.getElementById("login").addEventListener("click", function() {
        let userName = document.getElementById("userName").value;
        let userPassword = document.getElementById("userPassword").value;
        
        Login(userName, userPassword);
    });
});

