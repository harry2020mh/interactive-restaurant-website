// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll('#slider img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.getElementById('prev')?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('next')?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    // Menu Loader
    const loadMenuButton = document.getElementById('load-menu');
    const menuList = document.getElementById('menu-items');
    
    loadMenuButton?.addEventListener('click', () => {
        loadMenuButton.textContent = 'Loading...';
        
        // List of Menu Items with Prices
        const menuItems = [
            'Margherita Pizza - €12',
            'Pepperoni Pizza - €14',
            'Vegetarian Pizza - €12',
            'Pizza Pollo - €14',
            'BBQ Chicken Pizza - €16',
            'Four Cheese Pizza - €15',
            'Meat Lovers Pizza - €18'
        ];

        // Clear the list before adding new items
        menuList.innerHTML = '';

        // Dynamically create and append list items
        menuItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.padding = '0.5rem 0'; // Add spacing between menu items
            li.style.fontSize = '1.2rem'; // Adjust font size for readability
            menuList.appendChild(li);
        });

        loadMenuButton.textContent = 'Menu Loaded';
        loadMenuButton.disabled = true; // Disable the button after loading the menu
    });

    // Random Pizza Loader
    const loadPizzaButton = document.getElementById('load-pizza');
    const pizzaImage = document.getElementById('pizza-image');

    loadPizzaButton?.addEventListener('click', () => {
        loadPizzaButton.textContent = 'Loading...';
        fetch('https://foodish-api.com/api/images/pizza')
            .then(response => response.json())
            .then(data => {
                pizzaImage.src = data.image;
                pizzaImage.style.display = 'block';
            })
            .catch(error => console.error('Error loading pizza image:', error))
            .finally(() => loadPizzaButton.textContent = 'Show Me a Pizza');
    });

    // Random Dish Loader
    const loadDishButton = document.getElementById('load-dish');
    const dishImage = document.getElementById('dish-image');

    loadDishButton?.addEventListener('click', () => {
        loadDishButton.textContent = 'Loading...';
        fetch('https://foodish-api.com/api/')
            .then(response => response.json())
            .then(data => {
                dishImage.src = data.image;
                dishImage.style.display = 'block';
            })
            .catch(error => console.error('Error loading dish image:', error))
            .finally(() => loadDishButton.textContent = 'Show Me a Random Dish');
    });

    // Random Featured Dish Loader
    const loadFeaturedDishButton = document.getElementById('load-featured-dish');
    const featuredDishImage = document.getElementById('featured-dish-image');

    loadFeaturedDishButton?.addEventListener('click', () => {
        fetch('https://foodish-api.com/api/')
            .then(response => response.json())
            .then(data => {
                featuredDishImage.src = data.image;
                featuredDishImage.style.display = 'block';
            });
    });
});
