/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
document.addEventListener("DOMContentLoaded", function () {
    // Select the slider and ensure it exists
    const yearSlider = document.getElementById("year-slider");
    if (!yearSlider) {
        console.error("Slider element (#year-slider) not found!");
        return; // Exit if slider is missing
    }

    // Select the color circles and images
    const colorCircles = document.querySelectorAll(".color-circle");
    const slides = document.querySelectorAll(".slides img");

    // Ensure slides exist
    if (slides.length === 0) {
        console.error("No images found in the .slides container!");
        return;
    }

    // Update active image
    function updateImage(index) {
        slides.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    // Initialize the first image
    updateImage(0);

    // Add event listener to slider
    yearSlider.addEventListener("input", function () {
        const index = Number(this.value);
        updateImage(index);

        // Update active color circle
        if (colorCircles.length > 0) {
            colorCircles.forEach(circle => circle.classList.remove("active"));
            if (colorCircles[index]) {
                colorCircles[index].classList.add("active");
            }
        }
    });

    // Add event listeners to color circles
    if (colorCircles.length > 0) {
        colorCircles.forEach((circle, index) => {
            circle.addEventListener("click", () => {
                yearSlider.value = index; // Set slider value
                yearSlider.dispatchEvent(new Event("input")); // Trigger input event
            });
        });
    }
});

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
        'images/forest-1.png',
        'images/forest-1.png',
        'images/forest-2.png',
        'images/forest-2.png',
        'images/forest-3.png',
        'images/forest-3.png',
        'images/forest-4.png',
        'images/forest-4.png',
        'images/forest-5.png',
        'images/forest-5.png',
        'images/forest-6.png',
        'images/forest-6.png',
        'images/forest-7.png',
        'images/forest-7.png',
        'images/forest-8.png',
        'images/forest-8.png',
        'images/forest-9.png',
        'images/forest-9.png'
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
