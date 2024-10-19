// API URL for Audi R8
const apiUrl = "https://api.imaginstudio.com/audi/r8"; // Adjust this based on the API documentation

// Event listener for the dropdown change
document.getElementById('car-select').addEventListener('change', function () {
    const selectedCar = this.value;
    if (selectedCar === "audi-r8") {
        fetchCarData();
    } else {
        hideCarInfo();
    }
});

// Fetch car data from the API
function fetchCarData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('The network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API returns an object with 'name', 'description', and 'image' properties
            const carData = {
                name: data.name || "Audi R8", 
                description: data.description || "The Audi R8 is a is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system", // Fallback description
                image: data.image || "Audi r8.jpg" 
            };
            displayCarInfo(carData);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Display car information
function displayCarInfo(carData) {
    const carCard = document.getElementById('car-card');
    const carName = document.getElementById('car-name');
    const carImage = document.getElementById('car-image');
    const carDescription = document.getElementById('car-description');

    carName.textContent = "Audi R8";
    carImage.src = "Audi R8.jpg"; 
    carDescription.textContent = "The Audi R8 is a is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system";

    carCard.style.display = 'block'; // Show the card
}

// Hide car info if no selection
function hideCarInfo() {
    const carCard = document.getElementById('car-card');
    carCard.style.display = 'none';
}