// Toggle the nav menu on click of the hamburger icon
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Initialize slideIndex to track the current slide
let slideIndex = 1;
showSlides(slideIndex);

// Function to display the current slide based on its index
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to control the slideshow logic
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");  // Get all slide elements
    let dots = document.getElementsByClassName("dot");  // Get all navigation dots
    if (n > slides.length) { slideIndex = 1; }  // Wrap to the first slide if index exceeds the number of slides
    if (n < 1) { slideIndex = slides.length; }  // Wrap to the last slide if index is less than 1
    for (let i = 0; i < slides.length; i++) {  // Hide all slides
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {  // Remove the 'active' class from all dots
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  // Display the current slide
    dots[slideIndex - 1].className += " active";  // Set the current dot to active
}

// Auto-slide: Increment the slideIndex and update the slideshow every 5 seconds
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000);

// Google rating counter initialization
let count = 1.5; // Initial rating count (1.5 Lakh)
const increment = 1; // Amount to increment the count by
const interval = 2000; // Time interval for the counter update (2 seconds)
const displayElement = document.getElementById('rating');  // Get the rating display element

// Function to update the rating counter
function updateCounter() {
    count += increment;  // Increment the count
    displayElement.textContent = count.toLocaleString() + " Lakh +";  // Update the text content with the new count
}

// Set an interval to update the rating counter every 2 seconds
setInterval(updateCounter, interval);

// Category link click event to toggle active class on links
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default behavior of the link

        // Remove active class from all links
        document.querySelectorAll('.category-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// Array of specialist descriptions and colors for rotating updates
const descriptions = [
    { text: "75+ Orthodontists", color: "#e67a15" },  // Orange color
    { text: "150+ Specialists", color: "#e67a15" },  // Orange color
    { text: "60+ Laser Specialists", color: "#e67a15" },  // Orange color
    { text: "75+ Dental Specialists", color: "#e67a15" }  // Orange color
];

// Initialize currentIndex to track the current description
let currentIndex = 0;
const intervals = 2000; // Interval for changing description (2 seconds)
const displayElements = document.getElementById('specialist-description');  // Get the description display element

// Function to update the description and color
function updateDescription() {
    const description = descriptions[currentIndex];  // Get the current description
    displayElements.textContent = description.text;  // Update the text content with the new description
    displayElements.style.color = description.color;  // Set the color for the description
    currentIndex = (currentIndex + 1) % descriptions.length;  // Update the index for the next description
}

// Set an interval to update the description every 2 seconds
setInterval(updateDescription, intervals);

// Function to toggle the FAQ answers on click
function toggleFAQ(element) {
    const answer = element.nextElementSibling;  // Get the next sibling element (answer)
    const toggleSign = element.querySelector(".faq-toggle");  // Get the toggle sign inside the clicked question

    // Toggle the display of the answer between block and none
    if (answer.style.display === "block") {
        answer.style.display = "none";
        toggleSign.textContent = "+";  // Set toggle sign to "+"
    } else {
        answer.style.display = "block";
        toggleSign.textContent = "-";  // Set toggle sign to "-"
    }
}
