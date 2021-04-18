function GetValue () {
    let url = '#'; /* <-- insert database link (eg: sheety) */
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.booking);
            let studentName = document.getElementById("studentName");
        });
    }