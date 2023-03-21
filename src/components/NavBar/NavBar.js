import './NavBar.scss'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../store/slices/category/categorySlice'
import { fetchCategories } from '../../store/slices/category/categoryAPI'
import { getCartTotal, selectCart } from '../../store/slices/cart/cartSlice'
import { toggleSearchText } from '../../store/slices/searchProduct/searchProductSlice'

function NavBar() {
  const dispatch = useDispatch()
  const {data: categories} = useSelector(selectCategory)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const {totalItems} = useSelector(selectCart)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    window.scrollTo(0, 500)
    formRef.current.reset()
  }

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(getCartTotal())
  }, [])

  return (
    <nav>
      <ul className='ul1'>
        <li><Link to='/'><span className='shopping'>Shopping</span><span className='hub'>Hub</span></Link></li>
        <form ref={formRef} onSubmit={handleSubmit} className='form'>
          <input onChange={(e) => dispatch(toggleSearchText(e.target.value))} type="text" placeholder="Search here..."/>
          <button><i className="fas fa-search"></i></button>
        </form>
        <li className='cartLi'><NavLink to='/cart'>
          <i className='basket fas fa-shopping-cart'></i>
          <span className='cart'>Cart</span> <span className='count'>{totalItems}</span>
        </NavLink></li>
        <div className='div'>
          <div style={{transform: isSidebarOpen ? 'translateX(0)' : 'translateX(100%)'}}>
              {
                categories.map(cat => (
                  <h1 onClick={() => setIsSidebarOpen(false)} key={cat.id}>
                  <NavLink to={`/category/${cat.name}`}>{cat.name}</NavLink></h1>
                ))
              }
            <i className='x fas fa-times' onClick={() => setIsSidebarOpen(!isSidebarOpen)}></i>
          </div>
          <i className='bar fas fa-bars' onClick={() => setIsSidebarOpen(!isSidebarOpen)}></i>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar