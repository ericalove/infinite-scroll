const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements for links and photos, Add to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo)  => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_desription,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

let photosArray = [];

// Unsplash API

const count = 10;
const apiKey = 'foo';
const query= 'pink%2Fpurple-aesthetic'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&query=${query}&count=${count}`

// Get photos from Unsplash API
async function getPhotos() {
try {
  const response = await fetch(apiUrl);
  photosArray = await response.json();
  displayPhotos();
} catch (error) {
// Catch Error Here
}
}

// On load

getPhotos();
