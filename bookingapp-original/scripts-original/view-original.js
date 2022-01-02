function GetBooking() {
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingAppOriginal/booking';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.booking);
            let viewList = document.getElementById("viewList");
            let viewIds = [];

            //clear the table rows
            for(let k = viewList.rows.length - 1; k > 0; k--){
                viewList.deleteRow(k);
            }

            for(let i = 0; i < json.booking.length; i++){
                let gName = json.booking[i].name;
                let gEmail = json.booking[i].email;
                let gPhone = json.booking[i].phone;
                let gPax = json.booking[i].pax;
                let gId = json.booking[i].id;
                let gSlot= json.booking[i].slot;
                let buttonId = "delete" + gId;

                let row = viewList.insertRow(viewList.rows.length);
                row.insertCell(0).innerHTML = gId;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPhone;
                row.insertCell(4).innerHTML = gPax;
                row.insertCell(5).innerHTML = gSlot;
                row.insertCell(6).innerHTML = "<button id='" + buttonId + "'class='btn btn-danger'>Delete</button>";

                viewIds.push(buttonId);

            }

            for(let j =0; j < viewIds.length; j++){
                let el = document.getElementById(viewIds[j]);
                el.addEventListener("click", function(){
                    let theId = viewIds[j].replace("delete","");
                    DeleteBooking(theId);
                });
            }
        });
}

window.addEventListener("load", function() {
    document.getElementById("refreshList").addEventListener("click", function() {
        GetBooking();
    });
})

function DeleteBooking(id){
    let url = 'https://api.sheety.co/2287ba5e9c156f97e011e5cdc03a23cc/studioBookingAppOriginal/booking/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then((response) => {
            GetBooking();
        });

}