function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    /*console.log(JSON.stringify({ value }))*/
    let xhr = new XMLHttpRequest();
    let url = "url?data=" + encodeURIComponent(JSON.stringify({value}));
    xhr.open("POST", "script/receive.php", true);
    xhr.responseType="text";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
//        let json = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
    }
};
  xhr.send(JSON.stringify({value}));
  }

  const form = document.getElementById('weightForm');
  form.addEventListener('submit', handleSubmit);

  // Sending a receiving data in JSON format using GET method
//
function pullPreviousRecord(event){
    event.preventDefault();
    const dateValue = document.getElementById('selectPrevious').value;
    const formInput = document.getElementById('previousWeight');
    console.log(`Looking for something from ${dateValue}?`);
    let xhr = new XMLHttpRequest();
    let url = 'receive.php?date=' + dateValue;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            formInput.innerHTML = xhr.responseText;
        };
    };
};

const prevForm = document.getElementById('previousRecord');
prevForm.addEventListener('submit', pullPreviousRecord)
