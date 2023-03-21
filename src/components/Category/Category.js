import './Category.scss'
import { STATUS } from '../../store/slices/API/API'
import { Link } from 'react-router-dom'
import Error from '../../pages/Error'
import Loader from '../../pages/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/slices/category/categorySlice'
import { useEffect } from 'react'
import { fetchCategories } from '../../store/slices/category/categoryAPI'

function Category() {
  const dispatch = useDispatch()
  const {data: categories, status: categoryStatus} = useSelector(selectCategory)
  
  useEffect(() => {
    if(!categories.length){
      dispatch(fetchCategories())
    }
  }, [])

  if(categoryStatus === STATUS.ERROR) return(<Error/>)
  if(categoryStatus === STATUS.LOADING) return(<Loader/>)

  return (
    <section className='categories'>
      <h1 className='uppercase'>Category</h1>
      <div className='items'>
        {
          categories.slice(0, 5).map(cat => (
            <Link to={`/category/${cat.name}`} key={cat.id}>
              <div className="categoryItem">
                <img src={cat.image} alt="" />
                <h4>{cat.name}</h4>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Category