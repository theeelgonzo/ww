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
        let json = JSON.parse(xhr.responseText);
        console.log(json.weight + ", " + json.date);
    }
};
  xhr.send();
  }

  const form = document.getElementById('weightForm');
  form.addEventListener('submit', handleSubmit);

  // Sending a receiving data in JSON format using GET method
//      
