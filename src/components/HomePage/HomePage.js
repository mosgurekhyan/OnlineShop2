import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from '../../store/slices/category/categoryAPI'
import { selectCategory } from '../../store/slices/category/categorySlice'
import Category from '../Category/Category'
import ProductList from '../ProductList/ProductList'
import SingleCategory from '../SingleCategory/SingleCategory'
import Slider from '../Slider/Slider'
import './HomePage.scss'

function HomePage() {
  const dispatch = useDispatch()
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector(selectCategory)

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchProductsByCategory(1, 'all'))
    dispatch(fetchProductsByCategory(2, 'all'))
  }, [])
  
  return (
    <div className='homePage'>
      <Slider/>
      <Category/>
      <ProductList/>
      <>
        {
          productsByCategory[0] && <SingleCategory products={productsByCategory[0]} status={catProductAllStatus}/>
        }
        {
          productsByCategory[1] && <SingleCategory products={productsByCategory[1]} status={catProductAllStatus}/>
        }
      </>
    </div>
  )
}

export default HomePage