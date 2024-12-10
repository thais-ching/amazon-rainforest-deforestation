/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slides img");
    const slider = document.getElementById("year-slider");

    function updateImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    // Initialize the gallery with the first image (2001)
    updateImage(0);

    // Update the image when slider value changes
    slider.addEventListener("input", function () {
        updateImage(Number(this.value));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body.forest');
    const slider = document.querySelector('#year-slider');
    const slides = document.querySelectorAll('.slides img');

    // Background images corresponding to each year
    const backgroundImages = [
        'images/Forest 1.png', // Replace with actual paths for backgrounds
        'images/Forest 1.png',
        'images/Forest 2.png',
        'images/Forest 2.png',
        'images/Forest 3.png',
        'images/Forest 3.png',
        'images/Forest 4.png',
        'images/Forest 4.png',
        'images/Forest 5.png',
        'images/Forest 5.png',
        'images/Forest 6.png',
        'images/Forest 6.png',
        'images/Forest 7.png',
        'images/Forest 7.png',
        'images/Forest 8.png',
        'images/Forest 8.png',
        'images/Forest 9.png',
        'images/Forest 9.png'
    ];

    // Event listener for slider input
    slider.addEventListener('input', () => {
        const index = parseInt(slider.value, 10); // Get the current slider value

        // Update background image
        body.style.backgroundImage = `url('${backgroundImages[index]}')`;

        // Update the active slide
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index); // Show the active image
        });
    });

    // Initialize the first image and background on page load
    slider.value = 0; // Ensure the slider starts at the far left (2001)
    slider.dispatchEvent(new Event('input')); // Trigger input event to apply initial state
});

<script>
    // Get references to the slider and the color circles
    const yearSlider = document.getElementById('year-slider');
    const colorCircles = document.querySelectorAll('.color-circle');
    
    // Add event listener for slider change
    yearSlider.addEventListener('input', (event) => {
        const yearIndex = event.target.value; // Get the value of the slider
        // Remove 'active' class from all color circles
        colorCircles.forEach(circle => circle.classList.remove('active'));
        // Add 'active' class to the color circle corresponding to the year
        colorCircles[yearIndex].classList.add('active');
    });

    // Add event listeners to the color circles to jump to the corresponding year
    colorCircles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            yearSlider.value = index; // Set the slider value to the clicked year
            // Trigger the input event to update the map image
            yearSlider.dispatchEvent(new Event('input'));
        });
    });
</script>
