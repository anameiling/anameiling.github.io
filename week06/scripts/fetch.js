function GetBooking() {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/bookingApp (projectDeepWeek06)/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
        console.log(json.bookings);
        });
}
