// Ambil Elemen
const cart_items = document.getElementById('cart');

// ES5
function addProduct1(name1, category1) {
    return {
        nama1: name1, //perlu deklarasi name1 & category1
        kategori1: category1
    }
}

var getProduct1 = addProduct1("iphone", "Gadget");
console.log(getProduct1);

// ES 6
function addProduct(name, category) {
    return {
        name, // name & category tdk prlu dideklarasi lgi
        category
    }
}

var getProduct = addProduct("samsung", "Gadget");
console.log(getProduct);
cart_items.innerHTML = `Product: ${getProduct.name} Category: ${getProduct.category}`;