const images = document.querySelectorAll('img');

const options = {
// If the image gets within 50px in the Y axis, start the download.
root: null, // Page as root
rootMargin: '0px',
threshold: 0.1
};

const fetchImage = (url) => {
return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
});
};

const loadImage = (image) => {
const src = image.dataset.src;
fetchImage(src).then(() => {
    image.src = src;
});
};

const handleIntersection = (entries, observer) => {
entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
    loadImage(entry.target);
    }
});
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(handleIntersection, options);
    
    images.forEach(img => {
        observer.observe(img);
    });
} else {
    Array.from(images).forEach(image => loadImage(image));
}