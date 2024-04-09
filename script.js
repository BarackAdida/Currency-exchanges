async function fetchRandomCurrency() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json');
        const data = await response.json();

        // Get a random currency
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