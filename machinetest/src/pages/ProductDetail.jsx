import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsById, selectProductById } from "../features/product/productSlice"
import { useParams } from "react-router-dom"
import { CiStar } from "react-icons/ci";

export default function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(selectProductById)
  // const currentPage = useSelector(state=>state.products.currentPage)
  // console.log(currentPage)

  useEffect(function(){
    
    if (id) {
      dispatch(fetchProductsById(id));
    }
  },[dispatch, id])


  if(!data) return 

  return (
    <div className="mt-40 max-w-md w-full mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-white">
        <img 
          className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300" 
          src={data.image} 
          alt={data.title} 
        />
        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {data.category}
        </span>
      </div>
      
      {/* Product Info */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-2 h-14">{data.title}</div>
        <p className="text-white text-sm line-clamp-2 h-10 mb-3">
          {data.description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-4 justify-between mt-10">
          <div className="flex mr-2">
          <CiStar className="size-6 mr-2" /> 
           {" "}{data.rating.rate}
          </div>
          <div className="text-xl font-bold">
            ${" "}{data.price}
          </div>
        </div>
        
      </div>
    </div>
  )  
}

