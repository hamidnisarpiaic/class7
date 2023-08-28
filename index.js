/*You're building a TypeScript application for an online store.
 Define the following types and interfaces:
Define an interface Product with properties like id, name, price, and category.
Create a type Cart that represents an array of Product objects.
Define an interface Customer with properties like id, name, and email.
Create a type Order that represents an object containing a Customer and a Cart.
Implement a function that calculates the total price of products in the cart.
*/
// Implement a function that calculates the total price of products in the cart
function calculateTotalPrice(cart) {
    // Use the reduce() function to sum up the prices of all products in the cart
    var totalPrice = cart.reduce(function (total, product) { return total + product.price; }, 0);
    return totalPrice;
}
// Example usage
var customer1 = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};
var cartItems = [
    { id: 1, name: "Product A", price: 10, category: "Category 1" },
    { id: 2, name: "Product B", price: 20, category: "Category 2" },
    { id: 3, name: "Product C", price: 15, category: "Category 1" }
];
var order1 = {
    customer: customer1,
    cart: cartItems
};
var totalPrice = calculateTotalPrice(order1.cart);
console.log("Total Price:", totalPrice);
