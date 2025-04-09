import { Link } from "react-router-dom"
import { CiStar } from "react-icons/ci";

export default function ProductCard({product}) {

  return <Link to={`/product/${product.id}`}>
  <div className='flexw-full h-[420px] relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
			<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
				<img className="w-full object-cover" src={product.image} alt='product image' />
			</div>

			<div className='mt-4 px-5 pb-5'>
				<h5 className='text-xl font-semibold tracking-tight text-white'>{product.title.split(',').at(0)}</h5>
				<div className='absolute w-full bottom-1 mt-2 mb-5 flex justify-between'>
					<p className="absolutebottom-3">  
						<span className='text-3xl font-bold text-emerald-400'>${product.price}</span>
					</p>
          <p className="flex mr-14">
            <CiStar className="size-8" />
            <p className="ml-1 text-2xl">{product.rating.rate}</p>
          </p>
				</div>
			</div>
		</div> 

  </Link>
}
