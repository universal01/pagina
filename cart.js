// Arreglo de productos
let products = [
    { id: 1, image: 'imagen1.jpg', name: 'Product 1', price: 10.00, quantity: 1 },
    { id: 2, image: 'imagen2.jpg', name: 'Product 2', price: 20.00, quantity: 2 }
];

// Función para cargar los productos en el carrito
function loadCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';
    let totalCart = 0;

    products.forEach(product => {
        const productTotal = product.price * product.quantity;
        totalCart += productTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Quantity: <input type="number" value="${product.quantity}" data-id="${product.id}" onchange="updateQuantity(this)"></p>
            <p class="total">Total: $${productTotal.toFixed(2)}</p>
        `;

        cartContainer.appendChild(cartItem);
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('total');
    totalElement.innerText = `Cart Total: $${totalCart.toFixed(2)}`;
    cartContainer.appendChild(totalElement);
}

// Función para actualizar la cantidad de productos
function updateQuantity(input) {
    const productId = parseInt(input.getAttribute('data-id'));
    const newQuantity = parseInt(input.value);

    const product = products.find(p => p.id === productId);
    if (product) {
        product.quantity = newQuantity;
        loadCart();
    }
}

// Cargar el carrito al abrir la página
window.onload = loadCart;
