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
