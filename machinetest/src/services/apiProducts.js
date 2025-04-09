export async function getProducts(){
    const res = await fetch(`https://fakestoreapi.com/products`)
    if(!res.ok){
        throw Error("Failed fetching Products")
    }
    const data = await res.json()
    return data
}

export async function getProduct(productId){
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    if(!res.ok){
        throw new Error("Failed fetching product")
    }
    const data = await res.json()
    return data 
}

export async function getProductCategories(){
    const res = await fetch(`https://fakestoreapi.com/products/categories`)
    if(!res.ok){
        throw new Error("Failed fetching categories")
    }
    const data = await res.json()
    return data 
}

export async function fetchProductByCategory(category){
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    if(!res.ok){
        throw new Error("failed fetching products by id")
    }
    const data = await res.json()
    return data 
}