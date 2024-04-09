const baseUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0'
const curencyInitials = document.getElementById('currencyShorts')

function currencyShortForms() {
    fetch(`${baseUrl}/currency-api@latest/v1/currencies.json`)
    .then((res) => res.json())
    .then((data) => {
    })
}



// EuroRates.addEventListener('click', eurosExchangeRates) 
