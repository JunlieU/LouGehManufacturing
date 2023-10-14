// Sample data for products, components, and suppliers.
const products = [
    { id: 1, name: 'Product 1', quantity: 100 },
    { id: 2, name: 'Product 2', quantity: 50 },
    { id: 3, name: 'Product 3', quantity: 75 },
];

const components = [
    { id: 1, name: 'Component A', description: 'Description A' },
    { id: 2, name: 'Component B', description: 'Description B' },
];

const suppliers = [
    { id: 1, name: 'Supplier 1' },
    { id: 2, name: 'Supplier 2' },
];

// Function to display products, components, and suppliers in the list.
function displayProducts() 
{
    // Display products
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach((product) => {
        const li = document.createElement('li');
        li.innerText = `Product ID: ${product.id}, Name: ${product.name}, Quantity: ${product.quantity}`;
        productList.appendChild(li);
    });

    // Display components
    const componentList = document.getElementById('component-list');
    componentList.innerHTML = '';
    components.forEach((component) => {
        const li = document.createElement('li');
        li.innerText = `Component ID: ${component.id}, Name: ${component.name}, Description: ${component.description}`;
        componentList.appendChild(li);
    });

    // Display suppliers
    const supplierList = document.getElementById('supplier-list');
    supplierList.innerHTML = '';
    suppliers.forEach((supplier) => {
        const li = document.createElement('li');
        li.innerText = `Supplier ID: ${supplier.id}, Name: ${supplier.name}`;
        supplierList.appendChild(li);
    });
	// Function to fetch and display products
function fetchProducts() {
    fetch('http://localhost/lou-geh-manufacturing/api.php')
        .then(response => response.json())
        .then(data => {
            // Display products in the front-end
            // ...
        });
		
}

// Call fetchProducts() to load products when the page loads or when needed.

}

// Call the function to display data when the page loads.
window.addEventListener('load', displayProducts);

// TODO: Implement functionality to add and manage products, components, and suppliers.
