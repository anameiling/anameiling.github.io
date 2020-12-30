function BookNow(guestName, guestEmail, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioSessionBookingApp (project)/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            phone:guestPhone,
            pax: guestPax,
            datetime: guestDateTime
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
    });
}

window.addEventListener("load", function() {
    document.getElementById("bookNow").addEventListener("click", function() {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhone = document.getElementById("userPhone").value;
        let userPax = document.getElementById("userPax").value;
        let userDateTime = document.getElementById("userDateTime").value;
        
        BookNow(userName, userEmail, userPhone, userPax, userDateTime);
    });
});
