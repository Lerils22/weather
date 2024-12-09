document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('weatherForm');
    const overlay = document.getElementById('overlay');
    const loading = document.getElementById('loading');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;

        if (country && city) {
            overlay.style.display = 'block';
            loading.style.display = 'block';

            // Simulate a loading delay (e.g., fetching API data)
            setTimeout(() => {
                loading.style.display = 'none';  // Hide loading screen
                popup.style.display = 'block';  // Show popup result
            }, 2000);  // 2-second delay
        } else {
            alert("Please enter both country and city!");
        }
    });

    window.closePopup = function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    };
});
