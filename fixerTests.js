const API_KEY = "4a24ea8b1d544f251a84ddf1f0850b5b"; // Replace with your actual API key
const apiUrl = `http://data.fixer.io/api/latest?access_key=${API_KEY}&base=EUR&symbols=ZAR`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('API Response:', data);
    // Handle the parsed JSON data here
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });