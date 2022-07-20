const body = document.querySelector('body')
const tbodyProducts = document.querySelector('#tbodyProducts')
const btnAddUpdate = document.querySelector('#btnAddUpdate')


body.onload = () => {

const products = getProducts()
fillTable(products)
}
function fillTable(products){
    let trs=[]

products.forEach((p,i)=> {
//Icono de borrar
const iDelete = document.createElement('i')
iDelete.className = 'fas fa-trash'
const tdDelete = document.createElement('td')
tdDelete.appendChild(iDelete)
iDelete.addEventListener('click', () => {
    const isConfirm = condirm ('Seguro que quiere eliminarlo?')
    if(isConfirm)
{
    deleteProduct(i)
    clearTable()
    fillTable(getProducts())
}})
//Icono de actualizar
const iUpdate = document.createElement('i')
iUpdate.className = 'fas fa-pen'
iUpdate.addEventListener('click', () =>{
    inProduct.value = p.name
    inStock.value = p.stock
    inPrice.value = p.price
    inStatus.value = p.status
    btnAddUpdate.textContent = 'ACTUALIZAR'
    btnAddUpdate.onclick = (e) => handerUpdate
})
//Columna nombre
const tdProduct = document.createElement('td')
tdProduct.textContent = p.name
//Columna existencias
const tdStock = document.createElement('td')
tdStock.textContent = p.stock
//Columna precio
const tdPrice = document.createElement('td')
tdPrice.textContent = p.price
//Columna status
const tdStatus = document.createElement('td')
tdStatus.textContent = p.status

//Meter tds dentro de tr
const trProduct = document.createElement ('tr')
trProduct.append(
tdDelete,
tdUpdate,
tdProduct,
tdStock,
tdPrice,
tdStatus
)

//Guardar tr
trs.push(trProduct)
//tbodyProducta.appendChild(trProduct)
})
//Meter trs al tbody
tbodyProducts.append(...trs)
}

btnAddUpdate.addEventListener('click', handerAddClick)
function handerAddClick(e){
    const inProduct = document.querySelector('#inProduct') 
    const inStock = document.querySelector('#inStock') 
    const inPrice = document.querySelector('#inPrice') 
    const inStatus = document.querySelector('#inStatus') 

    const valueInProduct = inProduct.value
    const valueInStock  = inStock.value
    const valueInPrice = inPrice.value
    const valueInStatus = inStatus.value

    console.log(valueInProduct, valueInStock, valueInPrice, valueInStatus)
    e.preventDefault()
}