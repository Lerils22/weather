document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('weatherForm');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const country = document.getElementById('country').value;
        const city = document.getElementById('city').value;

        if (country && city) {
            overlay.style.display = 'block';
            popup.style.display = 'block'; 
        } else {
            alert("Please enter both country and city!");
        }
    });

    function closePopup() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }

    window.closePopup = closePopup;
});
