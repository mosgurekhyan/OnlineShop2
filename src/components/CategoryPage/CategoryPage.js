import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Error from '../../pages/Error'
import Loader from '../../pages/Loader/Loader'
import { formatPrice, STATUS } from '../../store/slices/API/API'
import { selectModal, setIsModalVisible, setModalData } from '../../store/slices/modal/modalSlice'
import { fetchProducts } from '../../store/slices/products/productsAPI'
import { selectProduct } from '../../store/slices/products/productsSlice'
import SingleProduct from '../SingleProduct/SingleProduct'
import './CategoryPage.scss'

function CategoryPage() {
  const dispatch = useDispatch()
  const {catname} = useParams()
  const {data: products, status: productStatus} = useSelector(selectProduct) 
  const {isModalVisible} = useSelector(selectModal)

  const viewModalHandler = (data) => {
    dispatch(setModalData(data))
    dispatch(setIsModalVisible(true))
  }

  const filterProducts = useMemo(() => {
    return [...products.filter(e => e.category.name.includes(catname))]
  }, [products, catname])

  useEffect(() => {
    window.scrollTo(0, 0)
    if(!products.length){
      dispatch(fetchProducts())
    }
  }, [])

  if(productStatus === STATUS.ERROR) return(<Error/>)
  if(productStatus === STATUS.LOADING) return(<Loader/>)

  return (
    <div className='productList'>
      {
        isModalVisible && <SingleProduct/>
      }
      <h1>{catname}</h1>
      <div className='proList'>
        {
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

export default CategoryPage