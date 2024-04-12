let counter = 0;
async function fetchRandomCurrency() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        const data = await response.json();

        // Get a random currency from the list
        const currencies = Object.keys(data);
        const randomIndex = Math.floor(Math.random() * currencies.length);
        const randomCurrency = currencies[randomIndex];
        const randomCurrencyName = data[randomCurrency];

        // Display the result
        const currencyInfo = document.getElementById('currencyInfo');
        currencyInfo.innerHTML = `<p>${randomCurrency}: ${randomCurrencyName}</p>`;
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {

        // Fetch content from the URL
        fetch('https://open.er-api.com/v6/latest/USD')
        // Put response into json form
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefined) {
                document.querySelector('#result')
                .innerHTML = `1 USD is equal to ${rate.toFixed(1)} ${currency}.`;
            }
            else {
                document.querySelector('#result')
                .innerHTML = 'Invalid Currency!';
            }
        })
        .catch(error => {
            console.log('Error:', error);
        });
        // Prevent default submission
        return false;
    }
});

// The calculator script functions
function addToDisplay(value) {
    document.getElementById('display')
    .value += value;
  }
  function calculate() {
    var display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } 
    catch (error) {
      display.value = 'Error';
    }
  }

  // Enables delete button
  function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display')
    .value = currentValue.slice(0, -1);
}