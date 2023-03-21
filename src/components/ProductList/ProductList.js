import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../pages/Error'
import Loader from '../../pages/Loader/Loader'
import { formatPrice, STATUS } from '../../store/slices/API/API'
import { selectModal, setIsModalVisible, setModalData } from '../../store/slices/modal/modalSlice'
import { fetchProducts } from '../../store/slices/products/productsAPI'
import { selectProduct } from '../../store/slices/products/productsSlice'
import { selectSearchProduct } from '../../store/slices/searchProduct/searchProductSlice'
import SingleProduct from '../SingleProduct/SingleProduct'
import './ProductList.scss'

function ProductList() {
  const dispatch = useDispatch()
  const {data: products, status: productStatus} = useSelector(selectProduct) 
  const {isModalVisible} = useSelector(selectModal)
  const searchProduct = useSelector(selectSearchProduct)

  const viewModalHandler = (data) => {
    dispatch(setModalData(data))
    dispatch(setIsModalVisible(true))
  }

  useEffect(() => {
    if(!products.length){
      dispatch(fetchProducts())
    }
  }, [])

  const filterProducts = useMemo(() => {
    return [...products.filter(e => e.title.includes(searchProduct.toLowerCase()))]
  }, [products, searchProduct])

  if(productStatus === STATUS.ERROR) return(<Error/>)
  if(productStatus === STATUS.LOADING) return(<Loader/>)

  return (
    <div className='productList'>
      {
        isModalVisible && <SingleProduct/>
      }
      <h1>Products</h1>
      <div className='proList'>
        {
          filterProducts.length === 0 ? <h1>No products found</h1> :
          filterProducts.map(e => (
            <div key={e.id} onClick={() => viewModalHandler(e)} className='data'>
              <img src={e.images[0]} alt="" />
              <h2 className='name'>{e.category.name}</h2>
              <div className='data2'>
                <h6>{e.title}</h6>
                <h4>{formatPrice(e.price)}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList