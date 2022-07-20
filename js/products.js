const products = [
    new product ('Lapiz',20,5,1),
    new product ('Cuaderno',15,5,1), 
    new product ('Regla',50,10,3), 
    new product ('Goma',200,4,1),
    new product ('Pluma' ,0,6,0),
]

function getProducts(){
    return products
}

function addProduct(name, stock, price, status){
    const newProduct = new Product(name, stock, price, status)
    products[i].name=newName
    products[i].stock=newStock
    products[i].price=newprice
    products[i].status=newstatus
}

function deleteProduct(){
products.splice(i,1)
}