import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedData = await fetch('products.json');
    const products = await loadedData.json();

    const storedCart = getShoppingCart();

    const savedCart = [];

    for (const id in storedCart ){
        const addedProduct = products.find( product => product.id === id)
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

        console.log(savedCart);

    return savedCart;
}

export default CartProductsLoader;