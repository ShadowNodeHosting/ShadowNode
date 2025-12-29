document.addEventListener('DOMContentLoaded', function () {
    const currencyDropdown = document.getElementById('currencyDropdown');
    const locationDropdown = document.getElementById('locationDropdown');
    const currencyOptions = document.querySelectorAll('.currency-option');
    const locationOptions = document.querySelectorAll('.location-option');

    const savedCurrency = localStorage.getItem('currency') || 'INR';
    const savedLocation = localStorage.getItem('location') || 'india';

    let currentCurrency = savedCurrency;
    let currentLocation = savedLocation;

    /* Exchange rates (base USD – approximate) */
    const exchangeRates = {
        USD: 1,
        INR: 90,
        BDT: 125,
        EUR: 0.85,
        GBP: 0.75,
        PKR: 278.0
    };
      
    /* Currency symbols */
    const currencySymbols = {
        USD: '$',
        EUR: '€',
        GBP: '£',
        INR: '₹',
        PKR: '₨',
        BDT: '৳'
    };

    /* Locations */
    const locationNames = {
        usa: 'United States',
        france: 'France',
        india: 'India'
    };

    const updatePlans = () => {
        const plans = document.querySelectorAll('.plan');

        plans.forEach(plan => {
            if (plan.getAttribute('data-location') === currentLocation) {
                plan.style.display = 'block';

                const basePrice = parseFloat(plan.getAttribute('data-price'));
                const convertedPrice = (
                    basePrice * exchangeRates[currentCurrency]
                ).toFixed(2);

                plan.querySelector('.price').innerHTML =
                    `${currencySymbols[currentCurrency]}${convertedPrice} <span>/ monthly</span>`;
            } else {
                plan.style.display = 'none';
            }
        });
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('currency', currentCurrency);
        localStorage.setItem('location', currentLocation);
    };

    const updateDropdownText = () => {
        currencyDropdown.innerText = currencySymbols[currentCurrency];
        locationDropdown.innerText = locationNames[currentLocation];
    };

    currencyOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            currentCurrency = option.getAttribute('data-currency');
            updatePlans();
            saveToLocalStorage();
            updateDropdownText();
        });
    });

    locationOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            currentLocation = option.getAttribute('data-location');
            updatePlans();
            saveToLocalStorage();
            updateDropdownText();
        });
    });

    updatePlans();
    updateDropdownText();
});
