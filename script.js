// ======================================
// CAMPUSBITE FOOD DATABASE
// ======================================

const foods = [
    {id:1,name:"Veg Burger",price:50,category:"Burgers & Sandwiches",type:"Veg",image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?w=700"},
    {id:2,name:"Cheese Sandwich",price:60,category:"Burgers & Sandwiches",type:"Veg",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700"},
    {id:3,name:"Grilled Sandwich",price:70,category:"Burgers & Sandwiches",type:"Veg",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700"},
    {id:4,name:"Cheese Burger",price:80,category:"Burgers & Sandwiches",type:"Veg",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"},

    {id:5,name:"Veg Pizza",price:90,category:"Pizza & Fast Food",type:"Veg",image:"https://images.unsplash.com/photo-1579751626657-72bc17010498?w=700"},
    {id:6,name:"Cheese Pizza",price:110,category:"Pizza & Fast Food",type:"Veg",image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"},
    {id:7,name:"Hakka Noodles",price:60,category:"Pizza & Fast Food",type:"Veg",image:"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700"},
    {id:8,name:"White Sauce Pasta",price:90,category:"Pizza & Fast Food",type:"Veg",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700"},

    {id:9,name:"Samosa",price:15,category:"Indian Snacks",type:"Veg",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700"},
    {id:10,name:"Kachori",price:20,category:"Indian Snacks",type:"Veg",image:"https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=700"},
    {id:11,name:"Veg Momos",price:50,category:"Indian Snacks",type:"Veg",image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700"},
    {id:12,name:"French Fries",price:50,category:"Indian Snacks",type:"Veg",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700"},

    {id:13,name:"Veg Thali",price:100,category:"Meals",type:"Veg",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700"},
    {id:14,name:"Veg Fried Rice",price:70,category:"Meals",type:"Veg",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700"},
    {id:15,name:"Veg Biryani",price:90,category:"Meals",type:"Veg",image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=700"},
    {id:16,name:"Paneer Roll",price:70,category:"Meals",type:"Veg",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700"},

    {id:17,name:"Chicken Biryani",price:130,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=700"},
    {id:18,name:"Egg Biryani",price:100,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700"},
    {id:19,name:"Chicken Roll",price:80,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700"},
    {id:20,name:"Chicken Burger",price:100,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=700"},
    {id:21,name:"Chicken Momos",price:70,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700"},
    {id:22,name:"Chicken Sandwich",price:90,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700"},
    {id:23,name:"Egg Roll",price:40,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700"},
    {id:24,name:"Chicken Fried Rice",price:100,category:"Non-Veg",type:"Non-Veg",image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700"},

    {id:25,name:"Chocolate Cake",price:50,category:"Desserts",type:"Veg",image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700"},
    {id:26,name:"Ice Cream",price:40,category:"Desserts",type:"Veg",image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700"},

    {id:27,name:"Cold Coffee",price:50,category:"Beverages",type:"Veg",image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700"},
    {id:28,name:"Fresh Juice",price:40,category:"Beverages",type:"Veg",image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=700"}
];

let cart = [];
let activeCategory = "All";
let searchText = "";


// ======================================
// DISPLAY FOOD ITEMS
// ======================================

function displayFoods() {

    const grid = document.getElementById("foodGrid");
    const noResults = document.getElementById("noResults");

    const filteredFoods = foods.filter(food => {

        const matchesCategory =
            activeCategory === "All" ||
            food.category === activeCategory;

        const matchesSearch =
            food.name.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    grid.innerHTML = "";

    if (filteredFoods.length === 0) {
        noResults.hidden = false;
        return;
    }

    noResults.hidden = true;

    filteredFoods.forEach(food => {

        const card = document.createElement("div");
        card.className = "food-card";

        card.innerHTML = `
            <div class="food-image">
                <img
                    src="${food.image}"
                    alt="${food.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=CampusBite';"
                >
            </div>

            <div class="food-details">

                <span class="food-type ${food.type === "Veg" ? "veg" : "non-veg"}">
                    ${food.type}
                </span>

                <h3>${food.name}</h3>

                <div class="food-bottom">
                    <span class="food-price">₹${food.price}</span>

                    <button onclick="addToCart(${food.id})">
                        Add +
                    </button>
                </div>

            </div>
        `;

        grid.appendChild(card);
    });
}


// ======================================
// SEARCH FUNCTION
// ======================================

document.getElementById("searchInput").addEventListener("input", function() {

    searchText = this.value.trim().toLowerCase();

    displayFoods();

});


// ======================================
// CATEGORY FILTER FUNCTION
// ======================================

document.getElementById("categoryFilters").addEventListener("click", function(event) {

    const button = event.target.closest("button[data-category]");

    if (!button) return;

    activeCategory = button.dataset.category;

    document.querySelectorAll("#categoryFilters button").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    displayFoods();

});


// ======================================
// ADD FOOD TO CART
// ======================================

function addToCart(id) {

    const food = foods.find(item => item.id === id);

    if (!food) return;

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...food,
            quantity: 1
        });
    }

    updateCart();

}


// ======================================
// UPDATE ORDER SUMMARY
// ======================================

function updateCart() {

    const cartItems = document.getElementById("cart-items");

    const cartCount = document.getElementById("cart-count");

    const summaryCount = document.getElementById("summary-count");

    const subtotalElement = document.getElementById("subtotal");

    const totalElement = document.getElementById("total");

    let subtotal = 0;
    let quantityTotal = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty. Add some delicious food!
            </p>
        `;

    }

    cart.forEach(item => {

        subtotal += item.price * item.quantity;

        quantityTotal += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
            </div>

            <div class="cart-controls">

                <button onclick="changeQuantity(${item.id}, -1)">−</button>

                <strong>${item.quantity}</strong>

                <button onclick="changeQuantity(${item.id}, 1)">+</button>

                <button onclick="removeFromCart(${item.id})">Remove</button>

            </div>

        `;

        cartItems.appendChild(cartItem);

    });

    cartCount.textContent = quantityTotal;

    summaryCount.textContent = `${quantityTotal} item${quantityTotal !== 1 ? "s" : ""}`;

    subtotalElement.textContent = `₹${subtotal}`;

    totalElement.textContent = `₹${subtotal}`;

}


// ======================================
// CHANGE FOOD QUANTITY
// ======================================

function changeQuantity(id, change) {

    const item = cart.find(food => food.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(food => food.id !== id);
    }

    updateCart();

}


// ======================================
// REMOVE FOOD FROM CART
// ======================================

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();

}


// ======================================
// CONFIRM ORDER
// ======================================

function placeOrder() {

    if (cart.length === 0) {

        alert("Your cart is empty! Please add food items first.");

        return;

    }

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    alert(
        "Your demo order has been placed successfully!\n\n" +
        "Total Amount: ₹" + total +
        "\n\nThank you for choosing CampusBite!"
    );

    cart = [];

    updateCart();

    const confirmation = document.getElementById("order-confirmation");

    confirmation.hidden = false;

}


// ======================================
// INITIALIZE WEBSITE
// ======================================

document.addEventListener("DOMContentLoaded", function() {

    displayFoods();

    updateCart();

});