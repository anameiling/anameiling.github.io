function GetBookings() {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/bookingApp (projectDeepWeek06)/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);
            let bookingList = document.getElementById("bookingList");
            bookingList.innerHTML = "";

            let jsonDiv = document.getElementById("json");
            jsonDiv.innerHTML = "";
            jsonDiv.innerHTML = json.bookings;

            for(let i = 0; i < json.bookings.length; i++){
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;

                bookingList.innerHTML += gId + "-" + gName + ", " + gEmail + ", pax: " + gPax + "<br>";
            }
        });
}

let getBookingBtn = document.getElementById("getBooking");
getBookingBtn.addEventListener("click", function() {
    GetBookings();
});

function BookNow(guestName, guestEmail, guestPax) {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/bookingApp (projectDeepWeek06)/bookings';
    let body = {
        booking: {
            name: guestName,
            email: guestEmail,
            pax: guestPax
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
        // Do something with object
        //console.log(json.booking);
        let bookMsg = document.getElementById("bookMsg");
        bookMsg.innerHTML = json.booking.name + " added!"
        GetBookings();
    });
}

let bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", function(){
    let gName = document.getElementById("guestName").value;
    let gEmail = document.getElementById("guestEmail").value;
    let gPax = document.getElementById("guestPax").value;

    BookNow(gName, gEmail, gPax);
}); 

function DeleteBooking(id){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/bookingApp (projectDeepWeek06)/bookings/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then(() => {
            document.getElementById("deleteMsg").innerHTML = "Booking Deleted!";
            GetBookings();
        });

}

let deleteBooking = document.getElementById("deleteBooking");
deleteBooking.addEventListener("click", function(){
    let deleteId = doc.getElementById("deleted").value;
    DeleteBooking(deleteId);
});