import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchItemsByCategory, selectCategoryProducts } from "../features/product/productSlice"
import ProductCard from "../components/ProductCard"
import Categories from "../components/Categories"

export default function ProductCategory() {
  const { category } = useParams()
  const categoryProduct  = useSelector(selectCategoryProducts)
  const dispatch = useDispatch()

  useEffect(function(){
    dispatch(fetchItemsByCategory(category))
  },[dispatch, category])

  console.log("categoryProduct : ", categoryProduct)

  if (!categoryProduct || categoryProduct.length === 0) return <p className="mt-30">No products found.</p>;


  return (
    <div className="mt-30">
    <div className=" z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">     
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {categoryProduct.map((product)=>{
                return <ProductCard key={product.id} product={product} />
            })}
        </div>
    </div>
    </div>

  )
}



