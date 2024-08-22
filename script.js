document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const purchaseButton = document.getElementById('purchase-button');
    const pixelIdInput = document.getElementById('pixel-id');

    const rows = 50; // Adjust according to your grid size
    const columns = 50; // Adjust according to your grid size
    const totalPixels = rows * columns;

    // Create the grid
    for (let i = 0; i < totalPixels; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.dataset.pixelId = i;
        pixel.addEventListener('click', () => {
            // Handle pixel click
            if (localStorage.getItem(`pixel-${i}`) === 'purchased') {
                alert('This pixel has already been purchased.');
            } else {
                alert(`Pixel ${i} is available for purchase.`);
            }
        });
        grid.appendChild(pixel);
    }

    // Load purchased pixels from localStorage
    for (let i = 0; i < totalPixels; i++) {
        if (localStorage.getItem(`pixel-${i}`) === 'purchased') {
            document.querySelector(`.pixel[data-pixel-id="${i}"]`).classList.add('purchased');
        }
    }

    // Handle purchase
    purchaseButton.addEventListener('click', () => {
        const pixelId = parseInt(pixelIdInput.value, 10);

        if (isNaN(pixelId) || pixelId < 0 || pixelId >= totalPixels) {
            alert('Invalid pixel ID.');
            return;
        }

        // Simulate payment processing
        // In a real application, you would handle payment processing here

        // Mark pixel as purchased
        localStorage.setItem(`pixel-${pixelId}`, 'purchased');
        document.querySelector(`.pixel[data-pixel-id="${pixelId}"]`).classList.add('purchased');
        alert(`Pixel ${pixelId} purchased successfully.`);
    });
});
