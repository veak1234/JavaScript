
let div = document.getElementById('id'); // Select the div with the ID 'id'

// Create a new h1 element with content and ID
let h1 = document.createElement("h1");   // Create a new h1 element
h1.textContent = "Hello, world!";        // Set the text content of the h1
h1.id = 'title';                         // Set the ID of the h1 element

// button click to create
let button = document.createElement('button');
button.textContent = 'Click';
button.id = 'toggleButton';

// button back
let buttonBack = document.createElement('button');
buttonBack.textContent = 'Back';
buttonBack.id = 'toggleButtonBack';

// Append the comment to the div
div.appendChild(h1);                     // Append the h1 to the div
div.appendChild(button);                 // Append the button to the div

//button click event
button.addEventListener('click', toggleVisibility); // Attach the event listener to the button

// Function to toggle the visibility of the h1 element
function toggleVisibility() {
    let p = document.createElement('p');
    let image = document.createElement('img');
    image.src = '/Image/1_OrjCKmou1jT4It5so5gvOA.jpg';
    p.textContent = 'Toggled visibility!';
    
    let h1 = document.getElementById('title');
    h1.style.display = 'none';
    let button = document.getElementById('toggleButton');
    button.style.display = 'none';
    div.appendChild(buttonBack);
    div.appendChild(p);
    div.appendChild(image);

}

// Back button click event
buttonBack.addEventListener('click', function() {
    h1.style.display = 'block';
    let p = document.querySelector('p');
    if (p) div.removeChild(p); // Remove the comment if it exists
    let button = document.getElementById('toggleButton');
    button.style.display = 'block';
    button.style.textAlign = 'center';
    let buttonBack = document.getElementById('toggleButtonBack');
    if (buttonBack) div.removeChild(buttonBack); // Remove the back button if it exists
    let image = document.querySelector('img');
    if (image) div.removeChild(image); // Remove the image if it exists
})
