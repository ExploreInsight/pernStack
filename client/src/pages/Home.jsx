import React from 'react'
import ProductCard from '../components/ProductCard'
import { PackageIcon, PlusCircleIcon, RefreshCcwIcon } from 'lucide-react'
import AddPRoductModal from '../components/AddPRoductModal';
import { useProductStore } from '../store/useProductStore';

function Home() {
  
  const {error , loading , products , fetchProudcts } = useProductStore();
  return (
    <main className='max-w-6xl mx-auto px-4 py-8'>
      <div className='flex justify-between items-center mb-8'>
        <button className='btn btn-primary' onClick={()=> document.getElementById('add_product_modal').showModal()}>
          <PlusCircleIcon className='size-5' />
        </button>
        <button className='btn btn-ghost btn-circle' onClick={fetchProudcts}>
          <RefreshCcwIcon className='size-5' />
        </button>
      </div>

      <AddPRoductModal />

      {error && <div className='alert alert-error mb-8'> {error}</div>}

      {products.length === 0 && !loading && (
        <div className='flex flex-col justify-center items-center h-96 space-y-4'>
          <div className='bg-base-100 rounded-full p-6'>
            <PackageIcon className='size-12' />
          </div>
          <div className='text-center space-y-2'>
            <h3 className='text-2xl font-semibold'>
              No products found
            </h3>
            <p className='text-gray-500 max-w-sm'>
               Get started by adding your first product to the inventory
            </p>
          </div>
        </div>
      )}

      {loading ? (<div className='flex justify-center items-center h-64'>
        <div className='loading loading-spinner loading-lg' />
      </div>) : (
        <div>
          { products.map(product =>(
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </main>
  )
}

export default Home