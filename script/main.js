function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log(JSON.stringify({ value }))
  }

  const form = document.getElementById('weightForm');
  form.addEventListener('submit', handleSubmit);
