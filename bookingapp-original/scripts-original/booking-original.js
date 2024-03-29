function BookNow(guestName, guestEmail, guestPhone, guestPax, guestSlot) {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingAppOriginal/booking';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            phone: guestPhone,
            pax: guestPax,
            slot: guestSlot
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
        let userSlot = document.getElementById("userSlot").value;
        
        BookNow(userName, userEmail, userPhone, userPax, userSlot);
    });
});
