let searchForm = document.querySelector('.search-form');
console.log(searchForm);
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle("active");
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
}