export default async function getProducts() {
    const responce = await fetch('https://fakestoreapi.com/products')
    const data = await responce.json()
    return data
}