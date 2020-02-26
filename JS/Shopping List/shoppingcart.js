"use strict"

class Items {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
} 

class ShoppingCart {
    shoppingCart = [];

    constructor (cart) {
        this.shoppingCart = cart;
    }

    addItem(product, price) {
        return this.shoppingCart.push({name: product, price: price});
    }

    removeItem(name) {
        this.shoppingCart.splice(this.shoppingCart.findIndex(product => {
            return name === product.name;
        }), 1);
    }

    editItem(newProduct) {
        this.shoppingCart[this.shoppingCart.findIndex(product => {
            return newProduct.name === product.name;
        })] = newProduct;
    }

    printTotal() {
        let sum = 0;
        for (let i = 0; i <= this.shoppingCart.length-1; i++) {
            sum += this.shoppingCart[i].price;
        }
        console.log(sum);
        return sum*.06 + sum; 
    }
}

    const itemList = [
        new Items('apple', 5),
        new Items('pineapple', 4),
        new Items('grape', 3),
        new Items('peach', 2),
        new Items('mango', 1)
    ];

    let cart = new ShoppingCart(itemList);
    console.log(cart.shoppingCart);
    cart.removeItem('apple');
    console.log(cart.shoppingCart);
    cart.addItem('kiwi', 5);
    console.log(cart.shoppingCart);
    cart.editItem({name: 'kiwi', price: 10});
    console.log(cart.shoppingCart);
    console.log(cart.printTotal());

