const API_KEY = "4a24ea8b1d544f251a84ddf1f0850b5b"; // Replace with your actual API key
const apiUrl = `http://data.fixer.io/api/symbols?access_key=${API_KEY}`;

// Array to store exchange rates
const exchangeRatesArray = [];

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('API Response:', data);
    
    // Extract exchange rates from the API response
    const symbols = data.symbols;

    // Loop through the rates object and store values in the array
    for (const currency in symbols) {
        exchangeRatesArray.push(currency);
    }

    console.log('Exchange Rates Array:', exchangeRatesArray);
    // Now you have exchange rates stored in the array
    // You can further process or use this array as needed
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });