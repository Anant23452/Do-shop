export async function FetchProduct(){
    const response = await fetch("https://fakestoreapi.com/products")
    if(!response.ok){
        throw new Error("fail to load product")

    }
    return response.json()
}