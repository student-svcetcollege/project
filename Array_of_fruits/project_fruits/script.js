const fruits = [
    {
        name: "Apple",
        category: "Pome Fruit",
        description: "A sweet, crunchy fruit that comes in various colors like red, green, and yellow.",
        benefits: [
            "Rich in fiber, aids digestion",
            "Supports heart health",
            "Boosts immunity"
        ],
        timeToEat: "Morning or as a midday snack",
        image: "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?cs=srgb&dl=pexels-pixabay-206959.jpg&fm=jpg"
    },
    {
        name: "Banana",
        category: "Tropical Fruit",
        description: "A soft, sweet fruit with a creamy texture, encased in a yellow peel.",
        benefits: [
            "Rich in potassium, supports heart health",
            "Provides quick energy",
            "Aids muscle recovery"
        ],
        timeToEat: "Before or after a workout",
        image: "https://png.pngtree.com/png-clipart/20220716/ourmid/pngtree-banana-yellow-fruit-banana-skewers-png-image_5944324.png"
    },
    {
        name: "Orange",
        category: "Citrus Fruit",
        description: "A juicy, tangy fruit packed with vitamin C and antioxidants.",
        benefits: [
            "Boosts immunity",
            "Improves skin health",
            "Aids in hydration"
        ],
        timeToEat: "Morning or as a refreshing snack",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTct4QnA6zwU4tyn9vq_ADJ8Ey6RfIWK-6V6g&s"
    },
    {
        name: "Mango",
        category: "Tropical Fruit",
        description: "A juicy and sweet stone fruit often called the 'king of fruits.'",
        benefits: [
            "Rich in vitamin A, promotes eye health",
            "Boosts immunity",
            "Supports digestive health"
        ],
        timeToEat: "As a dessert or evening snack",
        image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-plant-sapling/r/e/d/annual-no-yes-glenn-mango-plant-grafted-1-punarva-original-imah3ckqkf2rm73w.jpeg?q=90&crop=false"
    },
    {
        name: "Watermelon",
        category: "Melon",
        description: "A refreshing and hydrating fruit with a high water content.",
        benefits: [
            "Keeps you hydrated",
            "Rich in antioxidants",
            "Promotes heart health"
        ],
        timeToEat: "During hot afternoons",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KDumi-cWzQhj_NOTFTlWHWpGgVk9kF1oIg&s"
    },
    {
        name: "Strawberry",
        category: "Berry",
        description: "A sweet and tangy red fruit with tiny seeds on its surface.",
        benefits: [
            "Rich in vitamin C and antioxidants",
            "Supports heart health",
            "Promotes glowing skin"
        ],
        timeToEat: "As a snack or in desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFlLyCpLSjeo4sgQjvvwct2DZH7he6vWQpw&s"
    }
];
//  Step 2: Select the HTML element where the fruits will be displayed

const container = document.getElementById('fruitsContainer');
console.log(container)
// Step 3: Loop through each fruit in the array and create its HTML structure
fruits.forEach(fruit => {
    const fruitCard = document.createElement('div');
    fruitCard.className = 'fruitDetails';// Add a CSS class to style this div
    console.log("card"+fruitCard)

    // Use template literals to create the HTML content for this fruit
    fruitCard.innerHTML = `
        <h1>${fruit.name}</h1>
        <img src="${fruit.image}" alt="${fruit.name}" class="image_fruit" onerror="this.src='fallback-image-url.jpg'">
        <p class="fruitCategory">${fruit.category}</p>
        <p class="fruitdescription">${fruit.description}</p>
        <p class="timeToEat">${fruit.timeToEat}</p>
        <section>
            <h3>Benefits:</h3>
            <ul>
                ${fruit.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </section>
        <div class="separator"></div>
    `;
    // Append the fruit's card (HTML content) to the container
    container.appendChild(fruitCard);
});
