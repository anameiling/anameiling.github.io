function BookNow(guestName, guestEmail, guestPax, guestRemarks) {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/bookingApp (projectDeepWeek06)/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax,
            remarks: guestRemarks
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
        let userPax = document.getElementById("userPax").value;
        let userRemarks = document.getElementById("userRemarks").value;
        
        BookNow(userName, userEmail, userPax, userRemarks);
    });
});
