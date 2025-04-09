import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../features/product/productSlice';
import Categories from '../components/Categories';
import Search from '../components/Search';

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const status = useSelector(state => state.products.status);
  const data = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const itemsPerPage = 6;

  const filteredProducts = data.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    // Reset to the first page when search changes
    setCurrentPage(1);
  }

  if (!currentItems) return null;

  return (
    <div className='relative min-h-screen text-white overflow-hidden'>
      <div className='mt-30 flex justify-center'>
        <Categories />
      </div>
      <div className='flex justify-center mt-4'>
        <Search setSearch={setSearch} search={search} handleSearch={handleSearch} />
      </div>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {currentItems.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
        <div className='flex justify-between py-10'>
          <button onClick={handlePrev} className='border border-white px-10 py-2 flex rounded-xl'>
            <GrFormPrevious className='mt-1' />
            <p>Prev</p>
          </button>
          <button onClick={handleNext} className='border border-white px-10 py-2 flex rounded-xl'>
            Next
            <MdNavigateNext className='mt-[5.5px]' />
          </button>
        </div>
      </div>
    </div>
  );
}


